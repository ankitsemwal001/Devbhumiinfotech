"use client";

import { ContactForm } from "@/modules/contact/contact-form";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const trackClick = (type: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: `${type}_click`,
        location: "contact_section",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, Channels & What Happens Next */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
                Initiate Project Discussion
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal ">
                Let&apos;s Build Systems That Drive Measurable Growth
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need a high-ranking local business website, bespoke software, or AI-powered workflow automations, our engineering team in Rishikesh is ready to consult.
              </p>
            </div>

            {/* Quick Action Channels */}
            <div className="space-y-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick("whatsapp")}
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    Direct WhatsApp Chat
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Fastest way to share references and discuss scopes
                  </div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                onClick={() => trackClick("phone")}
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    Direct Phone Call
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {siteConfig.contact.phone} (09:30 AM - 06:30 PM IST)
                  </div>
                </div>
              </a>
            </div>

            {/* What Happens Next - 3 Steps */}
            {/* <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                What Happens Next:
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span><strong>Initial Review:</strong> We review your project goals, current challenges, and business domain.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span><strong>Discovery Consultation:</strong> We hold a call to align on technical requirements and scope details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span><strong>Tailored Proposal:</strong> You receive a clear, milestone-based timeline with exact deliverables.</span>
                </li>
              </ol>
            </div> */}
          </div>

          {/* Right Column: Static-Safe Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
