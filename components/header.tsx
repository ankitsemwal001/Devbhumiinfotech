"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">Devbhomi</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {"submenu" in item && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {"submenu" in item && item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => ("submenu" in item ? toggleDropdown(item.label) : null)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {"submenu" in item && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {"submenu" in item && item.submenu && openDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 px-3">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
