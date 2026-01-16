"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Digital Marketing",
      href: "#",
      submenu: [
        { label: "SEO", href: "#" },
        { label: "Technical SEO", href: "#" },
        { label: "Local SEO", href: "#" },
        { label: "Performance Marketing", href: "#" },
      ],
    },
    {
      label: "Web Development",
      href: "#",
      submenu: [
        { label: "Web Design", href: "#" },
        { label: "Website Design", href: "#" },
        { label: "Landing Pages", href: "#" },
        { label: "Frontend Development", href: "#" },
        { label: "Backend Development", href: "#" },
      ],
    },
    {
      label: "AI Automation",
      href: "#",
      submenu: [
        { label: "AI Automation Solutions", href: "#" },
        { label: "Chatbots", href: "#" },
        { label: "Workflow Automation", href: "#" },
        { label: "AI Content", href: "#" },
        { label: "AI Social Media Automation", href: "#" },
      ],
      badge: "",
    },
    { label: "Blogs", href: "/blogs" },   // ← yeh safely add kiya hai
  ]

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-gray-900 text-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </a>
          <a
            href="mailto:info@devbhomi.com"
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@devbhomi.com
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex flex-col">
                <div className="text-3xl font-black text-blue-700 tracking-tight">Devbhoomi</div>
                <div className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Infotech</div>
              </div>
            </Link>

            {/* Desktop Navigation - BIGGER text */}
            <nav className="hidden lg:flex items-center gap-2 whitespace-nowrap">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2.5 text-lg font-medium text-gray-800 hover:text-blue-700 transition-colors duration-200 flex items-center gap-1.5 relative whitespace-nowrap tracking-wide",
                      item.badge && "pr-12"
                    )}
                  >
                    {item.label}
                    {"submenu" in item && (
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    {item.badge && (
                      <span className="absolute -top-1 right-0 ml-1.5 px-2.5 py-1 text-xs font-extrabold bg-green-500 text-white rounded-full tracking-wider uppercase">
                        {item.badge}
                      </span> 
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {"submenu" in item && item.submenu && (
                    <div className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="flex items-center justify-between px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                        >
                          <span>{subitem.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white border-0 font-bold px-7 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                 Get Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden pb-6 border-t border-gray-200">
          <div className="space-y-2 pt-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => ("submenu" in item ? toggleDropdown(item.label) : setIsOpen(false))}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center justify-between tracking-wide"
                >
                  <div className="flex items-center gap-2">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2.5 py-1 text-xs font-extrabold bg-green-500 text-white rounded-full tracking-wider uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {"submenu" in item && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {"submenu" in item && item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        <span>{subitem.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 px-4">
            <Button
              asChild
              className="w-full bg-orange-600 hover:bg-orange-700 text-white border-0 font-bold transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}