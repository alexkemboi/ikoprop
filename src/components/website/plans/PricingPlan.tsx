"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Plan {
  id: number;
  name: string;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description?: string;
  features: Feature[];
}

interface PricingProps {
  cta?: {
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonUrl?: string;
  } | null;
}

export const PricingPlans = ({ cta }: PricingProps) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billingPeriod] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/plan");

        if (!res.ok) {
          setPlans([]);
          return;
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setPlans(data);
        } else {
          setPlans([]);
        }
      } catch {
        setPlans([]);
      }
    };

    fetchPlans();
  }, []);

  const currentPrice = (plan: Plan) =>
    billingPeriod === "yearly"
      ? plan.yearlyPrice
      : plan.monthlyPrice;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-20 px-6">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center rounded-full border border-[#005080]/10 bg-white px-4 py-2 shadow-sm mb-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#005080]">
            ABRA HOME REALTY
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#003B73] mb-5">
          {cta?.title || "Simple, Transparent Pricing"}
        </h2>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {cta?.subtitle ||
            "Choose the plan that fits your property management needs. No hidden fees, no surprises."}
        </p>
      </div>

      {/* Pricing Cards */}
<div className="relative max-w-7xl mx-auto">
  <div className="grid gap-8 lg:grid-cols-3">
    {plans.map((plan, index) => {
      const themes = [
        // STARTER
      
        {
          card: `
            bg-gradient-to-br
            from-[#005080]
            via-[#00639C]
            to-[#0A74B5]
            text-white
            shadow-2xl
            shadow-[#005080]/25
            scale-[1.03]
          `,
          ribbon: "from-white to-[#DDF0FD]",
          icon: "bg-white/20 text-white",
          title: "text-white",
          text: "text-white/85",
          button:
            "bg-white text-[#005080] hover:bg-[#F5FAFF]",
          badge:
            "bg-white/20 border border-white/20 text-white",
          glow: "bg-white/10",
        }, 
        
        // PROFESSIONAL
        {
          card: `
            bg-gradient-to-br
            from-[#F4FAFF]
            via-white
            to-[#E8F4FD]
            border
            border-[#CFE5F6]
            text-slate-900
            shadow-xl
            shadow-[#50B0F0]/10
          `,
          ribbon: "from-[#50B0F0] to-[#7BC3F5]",
          icon: "bg-[#DDF0FD] text-[#005080]",
          title: "text-[#005080]",
          text: "text-slate-600",
          button:
            "bg-[#50B0F0] hover:bg-[#3CA4E8] text-white",
          badge:
            "bg-[#DDF0FD] border border-[#B9DDF6] text-[#005080]",
          glow: "bg-[#50B0F0]/15",
        },


        // ENTERPRISE
        {
          card: `
            bg-gradient-to-br
            from-[#003B73]
            via-[#004A80]
            to-[#005080]
            text-white
            shadow-2xl
            shadow-[#003B73]/40
          `,
          ribbon: "from-[#8CCAF5] to-white",
          icon: "bg-white/15 text-white",
          title: "text-white",
          text: "text-white/80",
          button:
            "bg-[#8CCAF5] text-[#003B73] hover:bg-white",
          badge:
            "bg-white/15 border border-white/15 text-white",
          glow: "bg-[#8CCAF5]/10",
        },
      ];

      const theme = themes[index % themes.length];

      return (
        <div
          key={plan.id}
          className={`
            relative
            overflow-hidden
            rounded-[32px]
            p-8
            flex
            flex-col
            transition-all
            duration-500
            hover:-translate-y-2
            hover:scale-[1.015]
            hover:shadow-2xl
            ${theme.card}
          `}
        >
          {/* Top Ribbon */}
          <div
            className={`
              absolute
              top-0
              left-0
              h-2
              w-full
              bg-gradient-to-r
              ${theme.ribbon}
            `}
          />

          {/* Decorative Glow */}
          <div
            className={`
              absolute
              -right-12
              -top-12
              h-40
              w-40
              rounded-full
              blur-3xl
              ${theme.glow}
            `}
          />

          {/* Premium Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/5
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Badge */}
          {plan.badge && (
            <div className="absolute top-5 right-5">
              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  backdrop-blur-md
                  ${theme.badge}
                `}
              >
                {plan.badge}
              </span>
            </div>
          )}

          {/* Plan Header */}
          <div className="mb-8 relative z-10">
            <h3
              className={`
                text-2xl
                font-bold
                mb-3
                ${theme.title}
              `}
            >
              {plan.name}
            </h3>

            <div className="flex items-end gap-2 mb-5">
              <span className="text-lg opacity-80">KSHS</span>

              <span className="text-6xl lg:text-7xl font-black tracking-tight">
                {currentPrice(plan)}
              </span>

              <span className="pb-2 text-sm opacity-80">
                /month
              </span>
            </div>

            <p
              className={`
                text-sm
                leading-relaxed
                ${theme.text}
              `}
            >
              {plan.description}
            </p>
          </div>

          {/* Features */}
          <div className="flex-grow relative z-10">
            <div
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold
                mb-5
                opacity-70
              "
            >
              What's Included
            </div>

            <div className="space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`
                      flex
                      items-center
                      justify-center
                      rounded-full
                      h-7
                      w-7
                      flex-shrink-0
                      ${theme.icon}
                    `}
                  >
                    <Check className="h-4 w-4" />
                  </div>

                  <span
                    className={`
                      text-sm
                      leading-relaxed
                      ${theme.text}
                    `}
                  >
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 relative z-10">
            <Link
              href={`/signup?plan=${encodeURIComponent(
                plan.name
              )}`}
              className="block"
            >
              <Button
                className={`
                  w-full
                  h-12
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  ${theme.button}
                `}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      );
    })}
  </div>
</div>
    </section>
  );
};