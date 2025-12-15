import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
// import LocizeBackend from 'i18next-locize-backend'
import { initReactI18next } from "react-i18next/initReactI18next";

import { languages, fallbackLng, defaultNS, resources } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(resources))
  .init({
    // debug: true,
    supportedLngs: languages,
    fallbackLng: fallbackLng,
    lng: undefined, // let detect the language on client side
    fallbackNS: defaultNS,
    defaultNS,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export default i18next;
