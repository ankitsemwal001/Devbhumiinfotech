import { Phone, Mail, MapPin, MessageSquare, Globe2 } from "lucide-react";
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
          Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely. Whether you need custom software, mobile apps, website engineering, or AI workflow automation, we consult directly.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Clients worldwide are welcome (remote delivery)</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Phone E.164 */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Phone Consultation (E.164)
            </h4>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              +91 81260 06791
            </a>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct voice line for project inquiries
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              WhatsApp Direct
            </h4>
            <a
              href="https://wa.me/918126006791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
            >
              +91 81260 06791
            </a>
            <p className="text-xs text-slate-500 mt-0.5">
              Fast messaging & discovery scheduling
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 flex items-center justify-center shrink-0">
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
              Direct inbox for proposals & technical briefs
            </p>
          </div>
        </div>

        {/* Headquarters */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Rishikesh Headquarters
            </h4>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {siteConfig.contact.address.display}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">In-person visits by prior consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
