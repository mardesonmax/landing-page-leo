"use client";

import { HeroCard } from "@/components/HeroCard";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SocialCard } from "@/components/SocialCard";
import Works from "@/components/Works";
import { useTranslation } from "@/translation/client";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaRegArrowAltCircleDown,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  const { t } = useTranslation({ ns: "translation" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main className="mx-auto flex flex-col">
        <header className="flex items-center justify-between max-w-[1920px] py-6 px-6">
          <Image
            src="/assets/img/logo.png"
            alt={t("home.header.logoAlt")}
            width={110}
            height={24}
          />

          {/* Menu Desktop - oculto no mobile */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="transition hover:text-white" href="#">
              {t("home.header.nav.home")}
            </a>

            <a className="transition hover:text-white" href="#selected-work">
              {t("home.header.nav.projects")}
            </a>

            <a
              className="text-white/70 hover:text-white transition-colors text-base px-2"
              href="#contact"
            >
              {t("home.header.nav.contactMe")}
            </a>
          </nav>

          {/* Menu Mobile - hambúrguer */}
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Abrir menu"
                >
                  <FaBars size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#050505] border-white/10 w-[300px] sm:w-[400px] p-6"
              >
                <nav className="flex flex-col gap-6 pt-8">
                  <a
                    className="text-white/70 hover:text-white transition-colors text-base px-2"
                    href="#"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t("home.header.nav.home")}
                  </a>
                  <a
                    className="text-white/70 hover:text-white transition-colors text-base px-2"
                    href="#"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t("home.header.nav.projects")}
                  </a>
                  <a
                    className="text-white/70 hover:text-white transition-colors text-base px-2"
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t("home.header.nav.contactMe")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <div className="w-full">
          <section
            aria-labelledby="hero-title"
            className="flex flex-col justify-center min-h-[calc(100vh-86px)] max-w-[1396px] max-[1411px]:px-4 mx-auto"
          >
            <HeroCard>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="relative h-[320px] w-full overflow-hidden rounded-xl shadow-lg shadow-black/50 sm:h-[420px] lg:h-[496px] lg:w-[551px] lg:shrink-0">
                  <Image
                    src="/assets/img/avatar.png"
                    alt={t("home.hero.avatarAlt")}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 551px, 100vw"
                    priority
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-6">
                  <div className="flex flex-col gap-2">
                    <h1
                      id="hero-title"
                      className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[56px] lg:leading-[100%]"
                    >
                      {t("home.hero.title")}
                    </h1>

                    <p className="max-w-3xl text-sm leading-relaxed text-gray-400">
                      {t("home.hero.subtitle")}
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#contact"
                      className="gradient-border flex flex-1 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-[#4863F7] transition hover:text-blue-400"
                    >
                      {t("home.hero.ctas.contactMe")}
                    </a>

                    <a
                      href="#selected-work"
                      className="flex flex-1 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-25px_rgba(47,97,255,0.8)] transition hover:-translate-y-px hover:brightness-110"
                      style={{
                        background:
                          "linear-gradient(271.85deg, #F4F4F4 -1279.38%, #4863F7 53.99%)",
                      }}
                    >
                      {t("home.hero.ctas.checkMyWork")}
                    </a>
                  </div>
                </div>
              </div>
            </HeroCard>

            <div className="mt-[102px] flex justify-center">
              <div
                aria-label={t("home.hero.scrollHintAriaLabel")}
                className="motion-safe:animate-bounce [animation-duration:1.8s] flex h-10 w-10 items-center justify-center rounded-full text-white/60 will-change-transform"
              >
                <FaRegArrowAltCircleDown size={32} />
              </div>
            </div>
          </section>

          <div className="bg-gray-750 ">
            <Works />
          </div>

          <footer
            id="contact"
            aria-labelledby="contact-title"
            className=" bg-gray-900 flex items-center"
          >
            <div className="flex flex-col w-full max-w-349 mx-auto gap-6 pb-8 pt-4 max-[1413px]:px-4">
              <h2
                id="contact-title"
                className="text-xl font-semibold text-white"
              >
                {t("home.contact.title")}
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title={t("home.contact.cards.email.title")}
                  subtitle="leonardospessanha@gmail.com"
                  icon={MdOutlineMailOutline}
                />
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title={t("home.contact.cards.phone.title")}
                  subtitle="+55 71 99185-0677"
                  icon={FaWhatsapp}
                />
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title={t("home.contact.cards.linkedin.title")}
                  subtitle="www.linkedin.com/in/leonardospessanha-"
                  icon={FaLinkedinIn}
                />
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
