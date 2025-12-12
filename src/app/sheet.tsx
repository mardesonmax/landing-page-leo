"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

export type ProjectSheetData = {
  year: string;
  title: string;
  description: string;
  image: string;
  caseStudy?: {
    intro?: string;
    meta?: Array<{ label: string; value: string }>;
    coverImage?: string;
    sections?: Array<{
      title: string;
      body?: string[];
      bullets?: string[];
      images?: Array<{ src: string; alt: string; caption?: string }>;
    }>;
  };
};

export function ProjectSheet({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: ProjectSheetData | null;
}) {
  const coverSrc = project?.caseStudy?.coverImage ?? project?.image;
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-[calc(100vh-86px)] border-white/10 bg-[#050505] p-0 text-white"
      >
        {/* Scroll container */}
        <div
          className="h-full overflow-y-auto"
          onScroll={(e) => {
            const el = e.currentTarget;
            setShowStickyHeader(el.scrollTop > 80);
          }}
        >
          {/* Sticky header appears only after scroll */}
          <div
            className={[
              "sticky top-0 z-10 border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl transition-opacity duration-200",
              showStickyHeader
                ? "opacity-100"
                : "pointer-events-none opacity-0",
            ].join(" ")}
          >
            <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 px-6 py-4">
              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-white">
                  {project?.title ?? "Project"}
                </div>
              </div>
              <SheetClose asChild>
                <Button variant="outline" className="shrink-0">
                  Close
                </Button>
              </SheetClose>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1100px] px-6 pb-16 pt-10">
            <div className="space-y-6">
              {/* Top (non-sticky) header — starts "below" */}
              <div className="flex items-start justify-between gap-6">
                <SheetHeader className="p-0">
                  <SheetTitle className="text-3xl font-semibold text-white">
                    {project?.title ?? "Project"}
                  </SheetTitle>
                  {project?.year ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                      {project.year}
                    </p>
                  ) : null}
                </SheetHeader>

                <SheetClose asChild>
                  <Button variant="outline" className="shrink-0">
                    Close
                  </Button>
                </SheetClose>
              </div>

              {project?.caseStudy?.intro ? (
                <p className="max-w-3xl text-sm leading-relaxed text-white/65">
                  {project.caseStudy.intro}
                </p>
              ) : project?.description ? (
                <p className="max-w-3xl text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>
              ) : null}

              {project?.caseStudy?.meta?.length ? (
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 sm:grid-cols-2 lg:grid-cols-5">
                  {project.caseStudy.meta.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="uppercase tracking-[0.2em] text-white/40">
                        {item.label}
                      </div>
                      <div className="font-medium text-white/80">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {coverSrc ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f]">
                  <Image
                    src={coverSrc}
                    alt={project?.title ?? "Project cover"}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>

            <div className="mt-12 space-y-14">
              {(project?.caseStudy?.sections ?? []).map((section) => (
                <section key={section.title} className="space-y-5">
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>

                  {section.body?.length ? (
                    <div className="space-y-3 text-sm leading-relaxed text-white/70">
                      {section.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="space-y-2 text-sm text-white/70">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.images?.length ? (
                    <div className="grid gap-4 lg:grid-cols-2">
                      {section.images.map((img) => (
                        <figure key={img.src + img.alt} className="space-y-2">
                          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {img.caption ? (
                            <figcaption className="text-xs text-white/50">
                              {img.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>

          <SheetContent side="bottom" className="h-[calc(100vh-10%)]">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
            </SheetHeader>
            <div className="px-4 text-sm text-muted-foreground">
              Demo sheet route.
            </div>
            <SheetClose asChild>
              <Button variant="outline" className="m-4">
                Close
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
