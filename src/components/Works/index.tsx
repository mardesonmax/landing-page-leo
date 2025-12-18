/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjectSheet, type ProjectSheetData } from "@/components/sheet";
import { useTranslation } from "@/translation/client";
import { useEffect, useState } from "react";
import ScrollStackMotion from "../ScrollStackMotion";
import { projects } from "./data";

export default function Works() {
  const { t } = useTranslation({ ns: "translation" });

  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectSheetData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

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

      <section id="selected-work" className="relative p-0">
        <div className="mx-auto max-w-349 pt-8.25 pb-6 max-[1413px]:px-4">
          <ScrollStackMotion
            disabled={isMobile}
            header={
              <div className="w-full">
                <h2 className="text-[32px] max-lg:text-2xl font-semibold text-white">
                  {t("home.works.title")}
                </h2>
              </div>
            }
            panelHeightVh={100} // quanto scroll cada card consome
            cardHeightVh={70} // o seu card real
            focusOffsetVh={-8}
            stackOffsetPx={24}
            minScale={0.88}
            hideHeaderAtEnd
            headerExitOffsetPx={120}
          >
            {projectsWithText.map((project, index) => (
              <button
                key={index}
                type="button"
                className="flex flex-col w-full items-start cursor-pointer rounded-md bg-gray-750 text-left shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden"
                onClick={() => {
                  setSelectedProject(project);
                  setSheetOpen(true);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-fill w-full max-h-[70vh] aspect-video"
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
            ))}
          </ScrollStackMotion>
        </div>
      </section>
    </>
  );
}
