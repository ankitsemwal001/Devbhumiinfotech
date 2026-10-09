"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { headerNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-40">
      <div className="hidden md:block bg-gray-900 text-gray-200 py-2 border-b border-gray-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-gray-400">
            Top-Rated IT, Web Development & AI Automation Agency in Rishikesh
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "w-full transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800",
          isFixed ? "fixed top-0 left-0 shadow-md animate-in fade-in" : "relative"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-white.png"
                alt="Devbhoomi Infotech Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain brightness-0 dark:brightness-100"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {headerNavItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>

                      <div className="absolute top-full left-0 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-3 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {subItem.label}
                            </div>
                            {subItem.description && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-5">
            {headerNavItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between py-2 text-base font-medium text-gray-800 dark:text-gray-200"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-2 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button asChild className="w-full rounded-full bg-blue-600 text-white">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
