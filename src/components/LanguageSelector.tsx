"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/translation/client";
import { Languages } from "@/translation/settings";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { twMerge } from "tailwind-merge";

export function LanguageSelector() {
  const { t } = useTranslation({ ns: "translation" });
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = (params?.lng as Languages) || "en-US";

  const languages: { code: Languages; label: string }[] = [
    { code: "en-US", label: "EN" },
    { code: "pt-BR", label: "PT" },
  ];

  const handleLanguageChange = (lang: Languages) => {
    const segments = pathname?.split("/") ?? [];
    segments[1] = lang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10000">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label={t("commons.language.select", {
              lang:
                languages.find((l) => l.code === currentLang)?.label ??
                currentLang,
            })}
            className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md transition hover:bg-black/85 focus:outline-hidden focus:ring-2 focus:ring-white/20"
          >
            <Globe className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          side="top"
          sideOffset={10}
          className="z-10000 bg-gray-950 space-y-2 border border-white/15 rounded-md"
        >
          {languages.map((lang) => {
            const active = currentLang === lang.code;
            return (
              <DropdownMenuItem
                key={lang.code}
                onSelect={() => handleLanguageChange(lang.code)}
                className={twMerge(
                  "duration-300",
                  active ? "bg-gray-700" : "hover:bg-gray-600 cursor-pointer"
                )}
              >
                <span className="font-medium text-white">{lang.label}</span>
                {active ? (
                  <span className="ml-auto text-xs opacity-70 text-white">
                    ✓
                  </span>
                ) : null}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
