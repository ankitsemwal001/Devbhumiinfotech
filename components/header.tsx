"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  /* =====================
     SCROLL → FIX HEADER
  ===================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Packages",
      href: "#packages",
    },
    {
      label: "Projects",
      href: "#projects",
      badge: "",
    },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <>
      {/* =====================
          TOP CONTACT BAR
      ===================== */}
      <div className="hidden md:block bg-gray-900 text-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6">
          <a
            href="tel:+918126006791"
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 81260 06791
          </a>
          <a
            href="mailto:infotechdevbhoomi@gmail.com"
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            infotechdevbhoomi@gmail.com
          </a>
        </div>
      </div>

      {/* =====================
          MAIN HEADER
      ===================== */}
      <header
        className={cn(
          "w-full bg-white border-b border-gray-200 shadow-sm z-50 transition-all duration-300",
          isFixed ? "fixed top-0 left-0" : "relative"
        )}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="#hero" className="flex-shrink-0 group flex items-center">
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-rishikeshi.png"
                alt="Devbhoomi Infotech Logo"
                width={260}
                height={90}
                priority
                className="h-14 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* =====================
                DESKTOP NAV
            ===================== */}
            <nav className="hidden lg:flex items-center gap-2 whitespace-nowrap">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2.5 text-lg font-medium text-gray-800 hover:text-blue-700 transition-colors duration-200 flex items-center gap-1.5 relative tracking-wide",
                      item.badge && "pr-12"
                    )}
                  >
                    {item.label}
                    {"submenu" in item && (
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    {item.badge && (
                      <span className="absolute -top-1 right-0 px-2.5 py-1 text-xs font-extrabold bg-green-500 text-white rounded-full uppercase">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* =====================
                DESKTOP CTA
            ===================== */}
            <div className="hidden lg:flex">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white border-0 font-bold px-7 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link
                  href="https://wa.me/918126006791?text=Hi%20I%20am%20looking%20for%20IT%20services%20like%20website%20development%2C%20SEO%2C%20or%20digital%20solutions.%20Please%20connect%20with%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* =====================
                MOBILE MENU BUTTON
            ===================== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-800 hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* =====================
          SPACER (FIX JUMP)
      ===================== */}
      {isFixed && <div className="h-20" />}

      {/* =====================
          MOBILE NAVIGATION
      ===================== */}
      {isOpen && (
        <div
    className={cn(
      "lg:hidden bg-white border-t border-gray-200 z-40",
      isFixed
        ? "fixed top-20 left-0 w-full shadow-lg"
        : "relative"
    )}
  >
          <div className="space-y-1 pt-4 px-2 pb-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* MOBILE CTA */}
          <div className="px-4 pb-6">
            <Button
              asChild
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all duration-300"
            >
              <Link
                href="https://wa.me/918126006791"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
