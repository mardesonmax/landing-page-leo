"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation as useT } from "react-i18next";

import i18next from "./i18next";
import { Languages, TranslationProps } from "./settings";


const runsOnServerSide = typeof window === "undefined";

export function useTranslation({ ns }: TranslationProps) {
  const lng = useParams()?.lng as Languages;
  if (typeof lng !== "string")
    throw new Error("useT is only available inside /app/[lng]");
  if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18next.resolvedLanguage) return;
      setActiveLng(i18next.resolvedLanguage);
    }, [activeLng]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18next.resolvedLanguage === lng) return;
      i18next.changeLanguage(lng);
    }, [lng]);
  }
  return useT(ns);
}
