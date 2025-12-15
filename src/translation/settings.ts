import { enUS } from "./en-us";
import { ptBR } from "./pt-br";

export const fallbackLng = "en-US";
export const languages = [fallbackLng, "pt-BR"] as const;
export const defaultNS = "translation";
export const cookieName = "i18next";
export const headerName = "x-i18next-current-language";

export type Languages = (typeof languages)[number];

export interface TranslationProps {
  ns?: typeof defaultNS | (typeof defaultNS)[];
}

export const resources: Record<Languages, typeof ptBR> = {
  "en-US": enUS,
  "pt-BR": ptBR,
};
