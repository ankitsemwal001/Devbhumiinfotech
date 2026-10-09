import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Reach Out Direct
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
          Let’s Build Something Remarkable
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Whether you need a cutting-edge web application, an SEO strategy to outrank your competitors, or intelligent workflow automation, our engineering team in Rishikesh is ready to assist.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Call Us
            </h4>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <p className="text-xs text-gray-500 mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Email Us
            </h4>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-xs text-gray-500 mt-0.5">We reply within 2 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Office Location
            </h4>
            <div className="text-base font-bold text-gray-900 dark:text-white">
              {siteConfig.contact.address.display}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Visits by prior appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
