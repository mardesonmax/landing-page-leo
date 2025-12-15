import { headers } from "next/headers";

import i18next from "./i18next";
import { headerName, Languages, TranslationProps } from "./settings";

export async function useTranslation({ ns }: TranslationProps) {
  const headerList = await headers();
  const lng = headerList.get(headerName) as Languages;
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng);
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  return {
    t: i18next.getFixedT(lng, ns),
    i18n: i18next,
  };
}
