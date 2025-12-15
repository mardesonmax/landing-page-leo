/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjectSheet, type ProjectSheetData } from "@/components/sheet";
import { useTranslation } from "@/translation/client";
import Image from "next/image";
import { useState } from "react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";
import { projects } from "./data";

export default function Works() {
  const { t } = useTranslation({ ns: "translation" });

  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectSheetData | null>(null);

  const projectsWithText: ProjectSheetData[] = projects.map((p) => ({
    ...p,
    title: t(`home.works.projects.${p.id}.title`),
    description: t(`home.works.projects.${p.id}.description`),
  }));

  return (
    <>
      <ProjectSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        project={selectedProject}
      />

      {/* container igual ao restante (1396px) */}
      <section id="selected-work" className="relative p-0">
        <div className="mx-auto max-w-[1396px] pt-[33px] pb-6 max-[1413px]:px-4">
          <ScrollStack
            header={
              <div className="w-full">
                <h2
                  id="work-title"
                  className="text-[32px] font-semibold text-white"
                >
                  {t("home.works.title")}
                </h2>
              </div>
            }
          >
            {projectsWithText.map((project, index) => (
              <ScrollStackItem
                key={index}
                className="h-[90vh] cursor-pointer rounded-md bg-gray-750 text-left shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/20 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => {
                    setSelectedProject(project);
                    setSheetOpen(true);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video object-cover w-full"
                  />

                  <div className="flex flex-col gap-2 p-4 sm:p-6 text-white/80">
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
        </div>
      </section>
    </>
  );
}
