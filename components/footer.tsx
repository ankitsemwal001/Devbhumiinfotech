"use client";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid - 2 column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Left Side: Company Info & Links */}
          <div className="space-y-8">
            {/* Logo & About */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Devbhoomi Infotech
              </h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                Award-winning digital agency delivering web development, SEO
                services, and AI automation solutions across Uttarakhand.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Services & Links in Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Services */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                  Services
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="hover:text-white transition-colors cursor-default">
                    Digital Marketing
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    Web Development
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    AI Automation
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    SEO Services
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="hover:text-white transition-colors cursor-default">
                    Home
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    About Us
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    Portfolio
                  </li>
                  <li className="hover:text-white transition-colors cursor-default">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Info & Map */}
          <div className="space-y-4">
            {/* Address Card */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
              <div className="flex gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">
                    Our Address
                  </h4>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Shop No. 2, Laxmi Complex, Dhalwala, Rishikesh, Uttarakhand
                    249137
                  </p>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden h-32 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31696.304328422886!2d78.2194596!3d30.1187451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093dd61e3f7aab%3A0xe96a10d94d6ffb61!2sDevbhoomi%20Infotech%20-%20Complete%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Devbhoomi Infotech Location Map"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-3">
              {/* Email */}
              <a
                href="mailto:infotechdevbhoomi@gmail.com"
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-3 hover:border-blue-400/50 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-400 mb-2" />
                <p className="text-white text-sm font-semibold mb-1">Email</p>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors truncate">
                  infotechdevbhoomi@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+918126006791"
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-3 hover:border-green-400/50 transition-colors group"
              >
                <Phone className="w-4 h-4 text-green-400 mb-2" />
                <p className="text-white text-sm font-semibold mb-1">Phone</p>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                  +91 81260 06791
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918126006791"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-3 hover:border-green-500/50 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-500 mb-2" />
                <p className="text-white text-sm font-semibold mb-1">
                  WhatsApp
                </p>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                  Chat with us
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-base text-slate-400">
          <p>
            © {currentYear} Devbhoomi Infotech. All rights reserved. | Serving
            Uttarakhand
          </p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-default">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
