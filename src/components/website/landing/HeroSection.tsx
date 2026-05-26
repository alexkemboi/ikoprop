// import { Button } from "@/components/ui/button";
// import { ArrowRight, CheckCircle, PlayCircle, ShieldCheck, Zap } from "lucide-react";
// import ClientAnimations from "./ClientAnimation";

// interface HeroData {
//   id: number;
//   page: string;
//   title: string;
//   subtitle?: string;
//   description?: string;
//   buttonText?: string;
//   buttonUrl?: string;
//   secondaryButtonText?: string;
//   secondaryButtonUrl?: string;
// }

// async function getHeroData(): Promise<HeroData | null> {
//   try {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//     if (!apiUrl) {
//         throw new Error("Environment variable NEXT_PUBLIC_API_URL is not set.");
//     }
//     const res = await fetch(`${apiUrl}/api/hero?page=home`, {
//       cache: "no-store",
//       next: { revalidate: 0 }
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return Array.isArray(data) ? data[0] : data;
//   } catch (error) {
//     console.error("Error fetching hero:", error);
//     return null;
//   }
// }

// export default async function HeroSection() {
//   const hero = await getHeroData();

//   const data = hero || {
//     title: "Property Management Made Easy",
//     subtitle: "Streamline Rentals. Automate Workflows.",
//     description: "RentFlow360 helps landlords and property managers track tenants, automate payments, manage maintenance requests, and grow their rental business effortlessly.",
//     buttonText: "Get Started",
//     buttonUrl: "/signup",
//     secondaryButtonText: "View Demo",
//     secondaryButtonUrl: "/demo"
//   };

//   return (
//     <section className="relative bg-white pt-28 pb-16 sm:pt-24 lg:pt-32 lg:pb-24 overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
//       </div>

//       <div className="site-container relative z-10">
//         <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

//           {/* Left Content */}
//           <div className="flex-1 text-left lg:pr-8">

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#003b73] mb-6 leading-[1.1] lg:leading-[1.1]">
//               {data.title}
//             </h1>

//             <p className="text-lg sm:text-xl text-neutral-500 mb-10 leading-relaxed font-medium">
//               {data.subtitle && <span className="block font-semibold text-neutral-700 mb-2">{data.subtitle}</span>}
//               {data.description}
//             </p>

//             <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
//               {data.buttonText && (
//                 <a href={data.buttonUrl}>
//                   <Button
//                     size="lg"
//                     className="h-14 px-8 text-[16px] bg-[#003b73] hover:bg-[#002b5b] text-white shadow-lg shadow-[#003b73]/15 rounded-full transition-all duration-300 w-full sm:w-auto font-bold"
//                   >
//                     {data.buttonText}
//                   </Button>
//                 </a>
//               )}

//               <a href="/demo">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="h-14 px-8 text-[16px] border-[#003b73] text-[#003b73] hover:bg-[#f0f7ff] rounded-full transition-all duration-300 w-full sm:w-auto font-bold"
//                 >
//                   Get a Demo
//                 </Button>
//               </a>

//               {data.secondaryButtonText && data.secondaryButtonText !== "View Demo" && (
//                 <a href={data.secondaryButtonUrl}>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="h-14 px-8 text-[16px] border-neutral-200 text-neutral-600 hover:text-[#003b73] hover:border-[#003b73]/50 hover:bg-[#f0f7ff] bg-white rounded-full transition-all hover:-translate-y-1 w-full sm:w-auto font-semibold gap-2.5"
//                   >
//                     <PlayCircle className="w-5 h-5 text-[#003b73]" />
//                     {data.secondaryButtonText}
//                   </Button>
//                 </a>
//               )}
//             </div>

//             {/* Trust Text */}
//             <div className="flex items-center gap-8 text-[#4B5563] text-[12px] font-bold tracking-wider opacity-80 mt-2">
//               <div className="flex items-center gap-1.5 transition-transform hover:scale-110">
//                 <ShieldCheck className="w-4 h-4 text-[#4B5563]" />
//                 <span>TRUSTED</span>
//               </div>
//               <div className="flex items-center gap-1.5 transition-transform hover:scale-110">
//                 <ShieldCheck className="w-4 h-4 text-[#4B5563]" />
//                 <span>SECURE</span>
//               </div>
//               <div className="flex items-center gap-1.5 transition-transform hover:scale-110">
//                 <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
//                 <span>FAST</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex-1 w-full max-w-xl lg:max-w-none relative flex flex-col items-center mt-8 lg:mt-12">
//             {/* Badge Component */}
//             <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#003b73]/25 text-[#003b73] text-[12px] font-bold tracking-wider shadow-xl shadow-[#003b73]/10 mb-8 animate-fade-in-up">
//               <span className="flex h-2 w-2 relative">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003b73]/60 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003b73]"></span>
//               </span>
//               WELCOME TO THE FUTURE
//             </div>

//             <div className="relative w-full aspect-4/3 max-w-[600px] animate-fade-in-right overflow-hidden rounded-[40px] shadow-2xl">
//               <img
//                 src="/rentflow image.png"
//                 alt="RentFlow360 Future"
//                 className="w-full h-full object-cover animate-float-slow opacity-95 block"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <ClientAnimations />
//     </section>
//   );
// }



import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Building2,
  Home,
  TrendingUp,
} from "lucide-react";
import ClientAnimations from "./ClientAnimation";

interface HeroData {
  id?: number;
  page?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

async function getHeroData(): Promise<HeroData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is missing");
    }

    const res = await fetch(`${apiUrl}/api/hero?page=home`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) return null;

    const data = await res.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return null;
  }
}

export default async function HeroSection() {
  const hero = await getHeroData();

  const data = hero || {
    title: "Find Your Perfect Property With Confidence",
    subtitle:
      "Trusted Real Estate, Property Management & Investment Solutions",
    description:
      "Discover premium residential and commercial properties, professional property management services, construction expertise, and investment opportunities designed to maximize value and long-term growth.",
    buttonText: "Explore Properties",
    buttonUrl: "/properties",
    secondaryButtonText: "List Your Property",
    secondaryButtonUrl: "/properties/create",
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/20 blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 mb-8">
              <CheckCircle className="h-4 w-4" />
              Trusted Real Estate & Investment Experts
            </div>

            {/* Heading */}
            <h1 className="font-sen text-5xl sm:text-6xl lg:text-md font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8">
              {data.title}
            </h1>

            {/* Subtitle */}
            {data.subtitle && (
              <p className="text-lg font-semibold text-[#003b73] mb-3">
                {data.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              {data.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={data.buttonUrl}>
                <Button
                  size="lg"
                  className="
                    h-14
                    px-8
                    rounded-xl
                    bg-[#003b73]
                    hover:bg-[#002b5b]
                    text-white
                    font-semibold
                    shadow-xl
                    shadow-blue-900/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  {data.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href={data.secondaryButtonUrl}>
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-14
                    px-8
                    rounded-xl
                    border-slate-300
                    hover:border-[#003b73]
                    hover:bg-[#f0f7ff]
                    font-semibold
                  "
                >
                  {data.secondaryButtonText}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <h3 className="text-3xl font-bold text-[#003b73]">1,000+</h3>
                <p className="text-sm text-slate-500">
                  Properties Listed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#003b73]">500+</h3>
                <p className="text-sm text-slate-500">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#003b73]">98%</h3>
                <p className="text-sm text-slate-500">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Decorative background card */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] bg-gradient-to-r from-[#003b73]/10 to-emerald-500/10 blur-sm" />

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-md shadow-2xl">
              <img
                src="/eldoretdaimatowers.jpg"
                alt="ABRA Home Realty"
                className="w-full h-[650px] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Featured Property Card */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl px-5 py-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Featured Property
                </div>

                <div className="font-bold text-slate-900">
                  Luxury Family Residence
                </div>

                <div className="text-[#003b73] font-semibold">
                  KES 18,500,000
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-10 top-12 hidden lg:block">
              <div className="rounded-2xl bg-white shadow-xl p-4 w-52">
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-[#003b73]" />
                  <div>
                    <div className="font-semibold">
                      Residential
                    </div>
                    <div className="text-sm text-slate-500">
                      Premium Homes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 top-32 hidden lg:block">
              <div className="rounded-2xl bg-white shadow-xl p-4 w-56">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                  <div>
                    <div className="font-semibold">
                      Commercial Spaces
                    </div>
                    <div className="text-sm text-slate-500">
                      Investment Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-10 bottom-24 hidden lg:block">
              <div className="rounded-2xl bg-white shadow-xl p-4 w-56">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-amber-500" />
                  <div>
                    <div className="font-semibold">
                      High ROI
                    </div>
                    <div className="text-sm text-slate-500">
                      Investment Opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-6 right-6 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-[#003b73]" />
              Eldoret, Kenya
            </div>
          </div>
        </div>
      </div>

      <ClientAnimations />
    </section>
  );
}