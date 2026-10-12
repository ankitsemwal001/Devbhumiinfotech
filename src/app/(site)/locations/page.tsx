import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { LocationsDirectory } from "@/modules/locations/locations-directory";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Serve | Devbhoomi Infotech Solutions",
  description:
    "Explore Devbhoomi Infotech's digital services across Rishikesh, Dehradun, and Haridwar. Professional web design, web development, SEO, and AI automation.",
  alternates: {
    canonical: `${siteConfig.url}/locations/`,
  },
  openGraph: {
    title: "Areas We Serve | Devbhoomi Infotech Solutions",
    description:
      "Explore customized website design, modern web development, and AI automation tailored to your local business market in Uttarakhand.",
    url: `${siteConfig.url}/locations/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationsPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Locations", url: `${siteConfig.url}/locations/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950/40 to-slate-950 border-b border-slate-800">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Regional Technology Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Areas We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Serve
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Headquartered in Rishikesh, we deliver focused website design, web application development, SEO, and AI workflow automations across Rishikesh, Dehradun, and Haridwar.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Rishikesh Headquarters • Dehradun & Haridwar Service Areas</span>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationsDirectory />

        {/* Plain-text Other Areas We Serve */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center">
          <p className="text-sm text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Other areas we serve:</strong> Delhi NCR, Roorkee, Haldwani, Rudrapur, Kashipur, Kotdwar, Mussoorie, Nainital, and surrounding northern India commercial corridors.
          </p>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBannerSection />
    </div>
  );
}
