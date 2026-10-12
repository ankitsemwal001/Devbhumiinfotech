import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Direct Channels
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
          Connect With Our Team
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether you need a custom website, scalable business software, or intelligent workflow automation, our engineering team in Rishikesh is ready to consult.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Phone Consultation
            </h4>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <p className="text-xs text-slate-500 mt-0.5">
              {siteConfig.contact.openingHours.days} ({siteConfig.contact.openingHours.hours})
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Email Correspondence
            </h4>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct inbox for proposals & inquiries
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {siteConfig.contact.address.display}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Visits by prior consultation appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
