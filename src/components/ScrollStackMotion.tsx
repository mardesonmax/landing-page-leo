"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

export interface ScrollStackMotionProps {
  className?: string;
  children: ReactNode;

  header?: ReactNode;
  headerClassName?: string;
  headerGapPx?: number;

  /** altura do “painel” sticky (quanto cada card ocupa no scroll) */
  panelHeightVh?: number; // ex: 100

  /** altura visual do card (seu 80vh) */
  cardHeightVh?: number; // ex: 80

  focusOffsetVh?: number; // ex: 2
  stackOffsetPx?: number; // ex: 24

  minScale?: number; // ex: 0.88
  minStep?: number; // default 0.012
  maxStep?: number; // default 0.06
  yCompPx?: number; // default 40

  /** esconder header quando terminar o scroll do stack */
  hideHeaderAtEnd?: boolean; // default true
  headerExitOffsetPx?: number; // quanto antes some (px)
}

type ItemProps = {
  i: number;
  total: number;
  active: MotionValue<number>;

  stickyTopPx: number;
  panelHeightVh: number;
  cardHeightVh: number;

  focusOffsetPx: number;
  stackOffsetPx: number;

  minScale: number;
  minStep: number;
  maxStep: number;
  yCompPx: number;

  children: ReactNode;
};

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

function Item({
  i,
  total,
  active,
  stickyTopPx,
  panelHeightVh,
  cardHeightVh,
  focusOffsetPx,
  stackOffsetPx,
  minScale,
  minStep,
  maxStep,
  yCompPx,
  children,
}: ItemProps) {
  // step dinâmico: sempre chega em minScale no fundo
  const layers = Math.max(1, total - 1);
  const dynamicStep = (1 - minScale) / layers;
  const step = clamp(dynamicStep, minStep, maxStep);

  const depth = useTransform(active, (a) => Math.max(0, a - i));
  const scale = useTransform(depth, (d) => Math.max(minScale, 1 - d * step));
  const yComp = useTransform(scale, (s) => (1 - s) * yCompPx);

  return (
    <div
      className="sticky left-0 w-full flex items-center justify-center"
      style={{
        top: stickyTopPx,
        height: `${panelHeightVh}vh`,
        zIndex: 1000 + i,
      }}
    >
      {/* degrau NÃO escala */}
      <div
        style={{
          position: "relative",
          top: focusOffsetPx + i * stackOffsetPx,
          width: "100%",
          height: `${cardHeightVh}vh`,
        }}
      >
        {/* scale só no conteúdo */}
        <motion.div
          style={{
            scale,
            y: yComp,
            transformOrigin: "top center",
            height: "100%",
          }}
          className="w-full h-full"
        >
          {/* garante o filho ocupar a altura do card */}
          <div className="w-full h-full">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ScrollStackMotion({
  className,
  children,

  header,
  headerClassName,
  headerGapPx = 12,

  panelHeightVh = 100,
  cardHeightVh = 80,

  focusOffsetVh = 2,
  stackOffsetPx = 24,

  minScale = 0.88,
  minStep = 0.012,
  maxStep = 0.06,
  yCompPx = 40,

  hideHeaderAtEnd = true,
  headerExitOffsetPx = 120,
}: ScrollStackMotionProps) {
  const items = useMemo(() => React.Children.toArray(children), [children]);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const headerWrapRef = useRef<HTMLDivElement | null>(null);
  const headerMeasureRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const [headerH, setHeaderH] = useState(0);
  const [vh, setVh] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  // active float em “steps”: 0..(n-1)
  const active = useTransform(scrollYProgress, (p) => p * (items.length - 1));

  useLayoutEffect(() => {
    const update = () => {
      setHeaderH(headerMeasureRef.current?.offsetHeight ?? 0);
      setVh(window.innerHeight);
    };
    update();

    const ro = headerMeasureRef.current ? new ResizeObserver(update) : null;
    if (ro && headerMeasureRef.current) ro.observe(headerMeasureRef.current);

    window.addEventListener("resize", update);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // ✅ esconder header ao final
  useLayoutEffect(() => {
    if (!hideHeaderAtEnd) return;
    const root = rootRef.current;
    const end = endRef.current;
    if (!root || !end) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // quando o final encosta perto do topo (área do header), some
        setHideHeader(e.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        // “encosta” antes (rootMargin negativo p/ disparar mais cedo)
        rootMargin: `-${
          headerH + headerGapPx + headerExitOffsetPx
        }px 0px 0px 0px`,
      }
    );

    obs.observe(end);
    return () => obs.disconnect();
  }, [hideHeaderAtEnd, headerH, headerGapPx, headerExitOffsetPx]);

  const stickyTopPx = headerH + headerGapPx;
  const focusOffsetPx = -0.05 * vh + (focusOffsetVh / 100) * vh;

  return (
    <div
      ref={rootRef}
      className={twMerge("relative w-full", className)}
      style={{ overflow: "visible" }}
    >
      {header ? (
        <div
          ref={headerWrapRef}
          className={twMerge(
            "sticky top-0 z-9999 transition-opacity duration-200",
            hideHeader ? "opacity-0 pointer-events-none" : "opacity-100",
            headerClassName
          )}
        >
          <div ref={headerMeasureRef}>{header}</div>
        </div>
      ) : null}

      <div className="relative">
        {items.map((child, i) => (
          <Item
            key={i}
            i={i}
            total={items.length}
            active={active}
            stickyTopPx={stickyTopPx}
            panelHeightVh={panelHeightVh}
            cardHeightVh={cardHeightVh}
            focusOffsetPx={focusOffsetPx}
            stackOffsetPx={stackOffsetPx}
            minScale={minScale}
            minStep={minStep}
            maxStep={maxStep}
            yCompPx={yCompPx}
          >
            {child}
          </Item>
        ))}

        {/* sentinela do fim */}
        <div ref={endRef} className="h-px w-full" />
      </div>
    </div>
  );
}
