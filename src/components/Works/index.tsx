"use client";

import { ProjectSheet, type ProjectSheetData } from "@/app/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [cardHeight, setCardHeight] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectSheetData | null>(null);

  const STACK_OFFSET = 30;
  const STICKY_TOP = 120;
  const MIN_SCALE = 0.85;
  const SCALE_STEP = 0.08;

  useEffect(() => {
    const updateViewport = () => setViewportHeight(window.innerHeight || 0);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const projects: ProjectSheetData[] = [
    {
      year: "2023",
      title: "Unified sales engine",
      description:
        "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
      image: "/assets/img/work-one.png",
      caseStudy: {
        intro:
          "Redesigned the end-to-end sales journey to bring clarity, consistency, and control to commercial operations. The project reduced human error, eliminated duplicated workflows, and gave the company a scalable foundation for pricing governance.",
        meta: [
          { label: "Year", value: "2023" },
          { label: "My role", value: "Product Designer" },
          { label: "Segment", value: "HR" },
          { label: "Client", value: "Confidential" },
          { label: "Impact", value: "USD 700k/year" },
        ],
        coverImage: "/assets/img/work-one.png",
        sections: [
          {
            title: "Overview",
            body: [
              "This sales operation had to integrate multiple internal systems to configure deals, apply discounts, and generate proposals. Over time, rules became inconsistent, and the quoting flow was hard to audit.",
              "We rebuilt the experience around a single source of truth for pricing, with clearer steps, fewer exceptions, and guardrails that prevent invalid configurations.",
            ],
          },
          {
            title: "AS-IS",
            body: [
              "The quoting flow was spread across tools, with manual copy/paste and repeated validation. Small changes could break combinations, and there was no clear visibility of what impacted pricing.",
            ],
            bullets: [
              "Multiple handoffs between tools to assemble a quote.",
              "Frequent rework due to missing validations and duplicated steps.",
              "Lack of transparency on pricing logic and discount governance.",
            ],
            images: [
              {
                src: "/assets/img/work-one.png",
                alt: "Legacy quoting flow",
                caption: "Legacy flow (representative).",
              },
            ],
          },
          {
            title: "Initial research",
            body: [
              "We interviewed sales ops and account executives, mapped the end-to-end journey, and analyzed where errors were introduced. We also audited discount rules and product constraints used by different squads.",
            ],
          },
          {
            title: "Understanding how sales actually happened",
            body: [
              "Instead of following the documented process, teams were using shortcuts to meet deadlines. We designed for the real workflow, keeping compliance constraints but reducing friction for everyday quoting.",
            ],
            images: [
              {
                src: "/assets/img/work-one.png",
                alt: "Workflow mapping",
                caption: "Workflow mapping (representative).",
              },
            ],
          },
          {
            title: "Solution – Strategy driven by design",
            body: [
              "We introduced a guided configurator with progressive disclosure. Each step surfaces only relevant options, validates constraints early, and makes the pricing and discount logic explicit.",
              "We also created a governance layer to keep rules consistent across squads and allow changes without breaking existing quotes.",
            ],
            bullets: [
              "Guided configuration with early validations.",
              "Clear breakdown of price, discounts, and final totals.",
              "Reusable components to scale new products and add-ons.",
            ],
          },
          {
            title: "Conclusion",
            body: [
              "The redesign established a scalable foundation for pricing governance, reduced duplicated workflows, and increased confidence in proposal accuracy.",
            ],
          },
        ],
      },
    },
    {
      year: "2022",
      title: "Benefits configurator",
      description:
        "Built a modular product configurator to assemble plans, HR products, and add-ons faster, cutting quoting time and keeping teams aligned on available combinations.",
      image: "/assets/img/work-one.png",
    },
    {
      year: "2021",
      title: "Workforce insights hub",
      description:
        "Delivered an analytics hub to track engagement and performance trends, harmonizing metrics across squads and improving leadership reporting cadence.",
      image: "/assets/img/work-one.png",
    },
  ];

  useEffect(() => {
    const firstCard = cardRefs.current[0];
    if (!firstCard) return;

    const ro = new ResizeObserver(() => {
      setCardHeight(firstCard.offsetHeight);
    });
    ro.observe(firstCard);
    setCardHeight(firstCard.offsetHeight);

    return () => ro.disconnect();
  }, []);

  const stackMinHeight = (() => {
    if (!cardHeight) return undefined;
    const step = Math.max(1, cardHeight - STACK_OFFSET);
    return cardHeight + step * (projects.length - 1) + viewportHeight;
  })();

  useEffect(() => {
    const el = stackRef.current;
    if (!el || !cardHeight) return;

    const step = Math.max(1, cardHeight - STACK_OFFSET);
    const stackTop = el.getBoundingClientRect().top + window.scrollY;

    const update = () => {
      const progress = window.scrollY + STICKY_TOP - stackTop;
      const next = Math.max(
        0,
        Math.min(projects.length - 1, Math.floor(progress / step))
      );
      setActiveIndex(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [cardHeight, projects.length]);

  return (
    <div className="min-h-screen bg-gray-850 text-white">
      <ProjectSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        project={selectedProject}
      />

      <main className="mx-auto w-full max-w-[1396px] px-6 py-12">
        <section
          id="selected-work"
          aria-labelledby="work-title"
          className="space-y-8  w-full"
        >
          <div className="w-full max-w-[1396px] mx-auto">
            <h2 id="work-title" className="text-lg font-semibold">
              Selected work
            </h2>
          </div>

          <div
            ref={stackRef}
            className="relative isolate flex flex-col gap-0"
            style={{
              minHeight: stackMinHeight,
            }}
          >
            {projects.map((project, index) => {
              const distanceBehind = Math.max(0, activeIndex - index);
              const scale =
                distanceBehind === 0
                  ? 1
                  : Math.max(MIN_SCALE, 1 - distanceBehind * SCALE_STEP);
              const translateY = -distanceBehind * STACK_OFFSET;

              return (
                <button
                  type="button"
                  key={project.title}
                  data-index={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setSelectedProject(project);
                    setSheetOpen(true);
                  }}
                  className="sticky cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gray-750 text-left shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] transition-transform duration-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/20"
                  style={{
                    top: STICKY_TOP,
                    zIndex: projects.length + index,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    transformOrigin: "top center",
                  }}
                >
                  <div className="relative h-[360px] w-full bg-[#0f0f0f] sm:h-[460px] lg:h-[633px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 1100px, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0b0b0b] to-transparent" />
                  </div>

                  <div className="flex flex-col gap-2 p-4 text-white/80">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {project.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="max-w-3xl text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
