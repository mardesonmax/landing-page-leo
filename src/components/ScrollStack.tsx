"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className={twMerge("shadow-[0_0_30px_rgba(0,0,0,0.1)]", itemClassName)}>
    {children}
  </div>
);

export interface ScrollStackProps {
  className?: string;
  children: ReactNode;

  header?: ReactNode;
  headerClassName?: string;
  headerStickyTop?: string; // ex: "20vh"
  headerGapPx?: number;

  /** ✅ quanto antes o header deve sumir (px) */
  headerExitOffsetPx?: number;

  itemDistance?: number;
  stackTop?: string;
  topPadding?: string;

  useContainerScroll?: boolean;
  containerHeightClassName?: string;

  baseScale?: number;
  itemScale?: number;
  stackOffsetPx?: number;

  approachRangePx?: number;
}

function parseTopToPx(value: string, viewportHeight: number): number {
  const v = value.trim();
  if (v.endsWith("vh")) return (parseFloat(v) / 100) * viewportHeight;
  if (v.endsWith("px")) return parseFloat(v);
  if (v.endsWith("%")) return (parseFloat(v) / 100) * viewportHeight;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function getScrollParent(el: HTMLElement | null): HTMLElement | Window {
  if (!el) return window;

  let parent: HTMLElement | null = el.parentElement;
  while (parent) {
    const style = getComputedStyle(parent);
    const oy = style.overflowY;
    const canScrollY =
      (oy === "auto" || oy === "scroll" || oy === "overlay") &&
      parent.scrollHeight > parent.clientHeight + 1;

    if (canScrollY) return parent;
    parent = parent.parentElement;
  }
  return window;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",

  header,
  headerClassName,
  headerStickyTop,
  headerGapPx = 12,
  headerExitOffsetPx = 800,

  itemDistance = 40,
  stackTop = "0vh",
  topPadding = "1rem",

  useContainerScroll = false,
  containerHeightClassName = "h-full",

  baseScale = 0.92,
  itemScale = 0.02,
  stackOffsetPx = 18,

  approachRangePx = 260,
}) => {
  const items = useMemo(() => React.Children.toArray(children), [children]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const stickyRefs = useRef<Array<HTMLDivElement | null>>([]);
  const layerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const rafRef = useRef<number | null>(null);
  const headerHeightRef = useRef(0);

  const [hideHeader, setHideHeader] = useState(false);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return;

    const applyHeaderHeight = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 0;
      headerHeightRef.current = h + (header ? headerGapPx : 0);
      section.style.setProperty(
        "--ss-header-h",
        `${headerHeightRef.current}px`
      );
    };

    applyHeaderHeight();

    let ro: ResizeObserver | null = null;
    if (headerRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => applyHeaderHeight());
      ro.observe(headerRef.current);
    }

    const scrollEl: HTMLElement | Window = useContainerScroll
      ? wrapper
      : getScrollParent(wrapper);

    const getViewportHeight = () => {
      if (useContainerScroll) return wrapper.clientHeight;
      if (scrollEl instanceof HTMLElement) return scrollEl.clientHeight;
      return window.innerHeight;
    };

    const getTopInViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();

      if (useContainerScroll) {
        const wr = wrapper.getBoundingClientRect();
        return r.top - wr.top;
      }

      if (scrollEl instanceof HTMLElement) {
        const sr = scrollEl.getBoundingClientRect();
        return r.top - sr.top;
      }

      return r.top;
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    const tick = () => {
      rafRef.current = null;

      const n = items.length;
      if (n === 0) return;

      const viewportH = getViewportHeight();

      const headerTop = headerStickyTop ?? stackTop;
      const headerTopPx = parseTopToPx(headerTop, viewportH);

      const baseTopPx =
        parseTopToPx(stackTop, viewportH) + headerHeightRef.current;

      // ✅ some mais cedo controlado por headerExitOffsetPx
      if (endRef.current) {
        const endTop = getTopInViewport(endRef.current);
        const shouldHide =
          endTop <= headerHeightRef.current + headerTopPx + headerExitOffsetPx;

        if (shouldHide !== hideHeader) setHideHeader(shouldHide);
      }

      // step garantido pro fundo chegar no baseScale
      const layersCount = Math.max(1, n - 1);
      const minStepToReachBase = (1 - baseScale) / layersCount;
      const effectiveItemScale = Math.max(itemScale, minStepToReachBase);

      // pinned real
      let topIndex = -1;
      for (let i = 0; i < n; i++) {
        const sticky = stickyRefs.current[i];
        if (!sticky) continue;

        const targetTop = baseTopPx + i * stackOffsetPx;
        const currentTop = getTopInViewport(sticky);
        if (currentTop <= targetTop + 0.5) topIndex = i;
      }

      // suaviza pro próximo
      let activeIndexFloat = topIndex;
      if (topIndex >= 0 && topIndex + 1 < n) {
        const nextSticky = stickyRefs.current[topIndex + 1];
        if (nextSticky) {
          const targetTopNext = baseTopPx + (topIndex + 1) * stackOffsetPx;
          const nextTop = getTopInViewport(nextSticky);
          const dist = nextTop - targetTopNext;
          const p = clamp01(1 - dist / approachRangePx);
          activeIndexFloat = topIndex + p;
        }
      }

      // aplica scale
      for (let i = 0; i < n; i++) {
        const layer = layerRefs.current[i];
        if (!layer) continue;

        const depth = Math.max(0, activeIndexFloat - i);
        const raw = 1 - effectiveItemScale * depth;
        const s = Math.max(baseScale, Math.min(1, raw));

        layer.style.transformOrigin = "top center";
        layer.style.willChange = "transform";
        layer.style.transform = `scale(${s.toFixed(4)})`;
      }
    };

    const add = (t: Window | HTMLElement) =>
      t.addEventListener("scroll", schedule, { passive: true });
    const rm = (t: Window | HTMLElement) =>
      t.removeEventListener("scroll", schedule);

    add(scrollEl);
    window.addEventListener("resize", applyHeaderHeight);
    window.addEventListener("resize", schedule);

    schedule();

    return () => {
      rm(scrollEl);
      window.removeEventListener("resize", applyHeaderHeight);
      window.removeEventListener("resize", schedule);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (ro) ro.disconnect();
    };
  }, [
    items.length,
    header,
    headerGapPx,
    headerExitOffsetPx,
    useContainerScroll,
    stackTop,
    baseScale,
    itemScale,
    stackOffsetPx,
    approachRangePx,
    headerStickyTop,
    hideHeader,
  ]);

  const headerTop = headerStickyTop ?? stackTop;

  return (
    <div
      ref={wrapperRef}
      className={twMerge(
        "relative w-full",
        useContainerScroll ? `overflow-y-auto ${containerHeightClassName}` : "",
        className
      )}
    >
      <div ref={sectionRef} className="relative">
        {header ? (
          <div
            ref={headerRef}
            className={twMerge(
              "sticky z-[3000] transition-opacity duration-200",
              hideHeader ? "opacity-0 pointer-events-none" : "opacity-100",
              headerClassName
            )}
            style={{ top: headerTop }}
          >
            {header}
          </div>
        ) : null}

        <div className="relative px-20" style={{ paddingTop: topPadding }}>
          {items.map((child, i) => (
            <div
              key={i}
              ref={(node) => {
                stickyRefs.current[i] = node;
              }}
              className="sticky"
              style={{
                top: `calc(${stackTop} + var(--ss-header-h, 0px) + ${
                  i * stackOffsetPx
                }px)`,
                zIndex: 1000 + i,
                marginBottom: i < items.length - 1 ? itemDistance : 0,
              }}
            >
              <div
                ref={(node) => {
                  layerRefs.current[i] = node;
                }}
                className="will-change-transform"
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                {child}
              </div>
            </div>
          ))}

          {/* fim real dos cards */}
          <div ref={endRef} className="h-px w-full" />

          {/* spacer pra soltar o último sticky */}
          {/* <div aria-hidden className="h-screen" /> */}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
