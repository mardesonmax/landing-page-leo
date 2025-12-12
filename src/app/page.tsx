"use client";

import { HeroCard } from "@/components/HeroCard";
import { SocialCard } from "@/components/SocialCard";
import Works from "@/components/Works";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaRegArrowAltCircleDown,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main className="mx-auto flex flex-col ">
        <header className="flex items-center justify-between max-w-[1920px] py-6">
          <Image
            src="/assets/img/logo.png"
            alt="Leonardo"
            width={110}
            height={24}
          />

          <nav className="flex items-center gap-8 text-sm text-white/70">
            <a className="transition hover:text-white" href="#">
              Home
            </a>
            <a className="transition hover:text-white" href="#">
              Projects
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
              href="#contact"
            >
              Contact me
            </a>
          </nav>
        </header>

        <div className="w-full ">
          <section
            aria-labelledby="hero-title"
            className="flex flex-col justify-center min-h-[calc(100vh-86px)] max-w-[1396px] mx-auto"
          >
            <HeroCard>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="relative h-[320px] w-full overflow-hidden rounded-xl shadow-lg shadow-black/50 sm:h-[420px] lg:h-[496px] lg:w-[551px] lg:shrink-0">
                  <Image
                    src="/assets/img/avatar.png"
                    alt="Portrait of Léo"
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
                      Hi there, my name is Léo!
                    </h1>

                    <p className="max-w-3xl text-sm leading-relaxed text-gray-400">
                      Product Designer based in Brazil, helping companies
                      transform user experience into measurable business impact
                      since 2016.
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#selected-work"
                      className="flex flex-1 items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-200"
                    >
                      Contact me
                    </a>

                    <a
                      href="mailto:leonardospessanha@gmail.com"
                      className="flex flex-1 items-center justify-center rounded-md bg-[#2f61ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-25px_rgba(47,97,255,0.8)] transition hover:-translate-y-px hover:bg-[#2a57e6]"
                    >
                      Check my work
                    </a>
                  </div>
                </div>
              </div>
            </HeroCard>

            <div className="mt-[102px] flex justify-center">
              <div className="motion-safe:animate-bounce [animation-duration:1.8s] flex h-10 w-10 items-center justify-center rounded-full text-white/60 will-change-transform">
                <FaRegArrowAltCircleDown size={32} />
              </div>
            </div>
          </section>

          <Works />

          <footer
            id="contact"
            aria-labelledby="contact-title"
            className="space-y-6 bg-gray-900 min-h-100 flex items-center"
          >
            <div className="flex flex-col w-full max-w-349 mx-auto gap-4 pb-6 pt-4">
              <h2
                id="contact-title"
                className="text-xl font-semibold text-white"
              >
                Let&apos;s talk about design?
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title="E-mail"
                  subtitle="leonardospessanha@gmail.com"
                  icon={MdOutlineMailOutline}
                />
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title="Phone / WhatsApp"
                  subtitle="+55 71 99185-0677"
                  icon={FaWhatsapp}
                />
                <SocialCard
                  href="https://www.linkedin.com/in/leonardospessanha"
                  title="LinkedIn"
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
