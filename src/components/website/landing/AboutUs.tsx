"use client";

import Image from "next/image";
import { FlipWords } from "../../ui/flip-words";
import aboutBg from "@/assets/hero-cityscape.jpg";
import { AboutUs as AboutUsType } from "@/app/data/AboutUsData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AboutProps {
  aboutData: AboutUsType[];
}

export default function About({ aboutData }: AboutProps) {
  const words = ["platform", "experience", "solution"];

  const aboutUs = aboutData.find((s) => s.id === 1);
  const ourStory = aboutData.find((s) => s.id === 2);
  const ourVision = aboutData.find((s) => s.id === 3);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 py-12 lg:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center rounded-full border border-[#003b73]/10 bg-white px-4 py-2 shadow-sm mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#003b73]">
              ABRA HOME REALTY
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#003b73] mb-5 tracking-tight">
            <span className="text-slate-900">One</span>{" "}
            <FlipWords words={words} />
          </h2>

          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Simplifying property management with a seamless, tech-driven platform
            that connects landlords and tenants effortlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aboutUs && (
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/50
                bg-white
                p-8
                shadow-xl
                shadow-slate-200/60
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#003b73]/15
                min-h-[340px]
                flex
                flex-col
              "
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#003b73] to-sky-500" />

              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003b73]/10 text-[#003b73] font-bold text-lg">
                  A
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#003b73] mb-4">
                About <span className="text-slate-500">Us</span>
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed flex-1">
                {aboutUs.description}
              </p>
            </div>
          )}

          {ourStory && (
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/50
                bg-white
                p-8
                shadow-xl
                shadow-slate-200/60
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#003b73]/15
                min-h-[340px]
                flex
                flex-col
              "
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#003b73] to-sky-500" />

              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003b73]/10 text-[#003b73] font-bold text-lg">
                  S
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#003b73] mb-4">
                Our <span className="text-slate-500">Story</span>
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed flex-1">
                {ourStory.description}
              </p>
            </div>
          )}

          {ourVision && (
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/50
                bg-white
                p-8
                shadow-xl
                shadow-slate-200/60
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#003b73]/15
                min-h-[340px]
                flex
                flex-col
              "
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#003b73] to-sky-500" />

              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003b73]/10 text-[#003b73] font-bold text-lg">
                  V
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#003b73] mb-4">
                Our <span className="text-slate-500">Vision</span>
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed flex-1">
                {ourVision.description}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <Link href="/about">
            <Button
              size="lg"
              className="
                text-lg
                px-8
                py-6
                rounded-full
                bg-[#003b73]
                hover:bg-[#002b5b]
                text-white
                shadow-xl
                shadow-[#003b73]/20
                hover:shadow-[#003b73]/40
                transition-all
                duration-300
                hover:-translate-y-1
                relative
                overflow-hidden
                group
              "
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Learn More</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}