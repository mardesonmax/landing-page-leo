"use client";

import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import UnifiedSalesEngineCase from "@/components/case-studies/UnifiedSalesEngineCase";
import { type ReactNode, useState } from "react";

import { XIcon } from "lucide-react";

export type ProjectSheetData = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
};

const CASES: Record<string, ReactNode> = {
  "unified-sales-engine": <UnifiedSalesEngineCase />,
};

function SheetBody({
  project,
  content,
  onStickyHeaderChange,
}: {
  project?: ProjectSheetData | null;
  content: ReactNode | null;
  onStickyHeaderChange?: (visible: boolean) => void;
}) {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  return (
    <div
      className="h-full overflow-y-auto relative"
      onScroll={(e) => {
        const el = e.currentTarget;
        const next = el.scrollTop > 80;
        setShowStickyHeader((prev) => (prev === next ? prev : next));
        onStickyHeaderChange?.(next);
      }}
    >
      {/* Blur acima do header sempre visível */}
      <div className="absolute top-0 left-0 right-0 z-30 h-20 pointer-events-none bg-linear-to-b from-gray-850 via-gray-850/80 to-transparent" />

      {/* X sempre visível no canto direito */}
      <div className="absolute top-4 right-4 z-40 pointer-events-auto">
        <SheetClose asChild>
          <button
            type="button"
            className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-[#FF6B6B] hover:bg-[#FF5252] transition-colors disabled:pointer-events-none"
            aria-label="Close"
          >
            <XIcon className="size-4 text-black font-bold" strokeWidth={3} />
          </button>
        </SheetClose>
      </div>

      {/* Sticky header appears only after scroll (old behavior) */}
      <div
        className={[
          "sticky top-0 z-20 border-b border-white/10 bg-gray-850/85 transition-opacity duration-200",
          showStickyHeader ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1398px] items-center px-4 sm:px-6 lg:px-0">
          <div className="min-w-0 truncate pr-10 text-sm font-semibold leading-normal text-white">
            {project?.title ?? "Project"}
          </div>
        </div>

        {/* X no mesmo canto do X padrão */}
        {showStickyHeader ? (
          <div className="pointer-events-auto absolute right-4 top-[12px]">
            <SheetClose asChild>
              <button
                type="button"
                className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-[#FF6B6B] hover:bg-[#FF5252] transition-colors disabled:pointer-events-none"
                aria-label="Close"
              >
                <XIcon
                  className="size-4 text-black font-bold"
                  strokeWidth={3}
                />
              </button>
            </SheetClose>
          </div>
        ) : null}
      </div>

      {content ?? (
        <div className="mx-auto w-full max-w-[1398px] px-4 py-10 text-sm text-white/70 sm:px-6 lg:px-0">
          Select a project to view details.
        </div>
      )}
    </div>
  );
}

export function ProjectSheet({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: ProjectSheetData | null;
}) {
  const content = project?.id ? CASES[project.id] : null;
  const [stickyHeaderVisible, setStickyHeaderVisible] = useState(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className={[
          "h-[calc(100vh-86px)] border-white/10 bg-gray-850 p-0 text-white",
          stickyHeaderVisible ? "**:data-[slot=sheet-close-icon]:hidden" : "",
        ].join(" ")}
      >
        <SheetBody
          key={project?.id ?? "none"}
          project={project}
          content={content}
          onStickyHeaderChange={setStickyHeaderVisible}
        />
      </SheetContent>
    </Sheet>
  );
}
