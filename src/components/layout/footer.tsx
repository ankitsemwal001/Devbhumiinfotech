"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { serviceGroups } from "@/content/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter out any unconfirmed empty social URLs
  const activeSocials = (Object.entries(siteConfig.social) as [string, string][]).filter(
    ([, url]) => typeof url === "string" && url.trim().length > 0
  );

  return (
    <footer className="bg-slate-950 text-slate-100 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Devbhoomi Infotech Home">
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-white.png"
                alt="Devbhoomi Infotech Logo"
                width={220}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technology and digital growth partner rooted in Rishikesh, Uttarakhand.
              We build custom websites, business software, AI automations, and search
              visibility for clients across India.
            </p>

            {/* Social Icons rendered ONLY if confirmed in site.ts */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {activeSocials.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 transition-colors text-xs capitalize text-slate-300"
                    aria-label={`Devbhoomi Infotech on ${platform}`}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Core Services (4 groups) */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Our Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {serviceGroups.map((group) => (
                <li key={group.id}>
                  <Link
                    href={`/services/#${group.id}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about/" className="hover:text-blue-400 transition-colors">
                  About Us & Ethos
                </Link>
              </li>
              <li>
                <Link href="/about/#approach" className="hover:text-blue-400 transition-colors">
                  Our Engineering Approach
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-blue-400 transition-colors">
                  Projects & Concept Showcase
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-blue-400 transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/blogs/" className="hover:text-blue-400 transition-colors">
                  Insights & Technical Articles
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-blue-400 transition-colors">
                  Contact & Project Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Service Areas */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.display}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.contact.openingHours.days} ({siteConfig.contact.openingHours.hours})</span>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="pt-2 border-t border-slate-900">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Primary Service Hubs:
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-400 leading-relaxed">
                <Link href="/website-design-in-rishikesh/" className="hover:text-blue-400 transition-colors">
                  Rishikesh
                </Link>
                <span>·</span>
                <Link href="/website-design-in-dehradun/" className="hover:text-blue-400 transition-colors">
                  Dehradun
                </Link>
                <span>·</span>
                <Link href="/website-design-in-haridwar/" className="hover:text-blue-400 transition-colors">
                  Haridwar
                </Link>
                <span>·</span>
                <Link href="/web-development-in-roorkee/" className="hover:text-blue-400 transition-colors">
                  Roorkee
                </Link>
                <span>·</span>
                <Link href="/website-design-in-haldwani/" className="hover:text-blue-400 transition-colors">
                  Haldwani
                </Link>
                <span>·</span>
                <span className="text-slate-500">Across Uttarakhand & India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact/" className="hover:text-slate-300 transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
