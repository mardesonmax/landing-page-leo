"use client";

import { ProjectSheet, type ProjectSheetData } from "@/app/sheet";
import Image from "next/image";
import { useState } from "react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";
import { projects } from "./data";

export default function Works() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectSheetData | null>(null);

  return (
    <>
      <ProjectSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        project={selectedProject}
      />

      <section className="relative p-0">
        <ScrollStack
          header={
            <div className="w-full max-w-349 mx-auto py-4">
              <h2 id="work-title" className="text-lg font-semibold text-white">
                Selected work
              </h2>
            </div>
          }
        >
          {projects.map((project, index) => (
            <ScrollStackItem
              key={index}
              itemClassName="cursor-pointer rounded-2xl border border-white/10 bg-gray-750 text-left shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/20 rounded-[40px] overflow-hidden"
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => {
                  setSelectedProject(project);
                  setSheetOpen(true);
                }}
              >
                <div className="relative h-90 w-full bg-[#0f0f0f] sm:h-115 lg:h-158.25">
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
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>
    </>
  );
}
