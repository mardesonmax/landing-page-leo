"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/translation/client";
import { Languages } from "@/translation/settings";

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
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1.5 text-sm font-medium transition rounded-md cursor-pointer ${
            currentLang === lang.code
              ? "bg-white/10 text-white border border-white/20"
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
          aria-label={t("commons.language.select", { lang: lang.label })}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
