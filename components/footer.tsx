"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Devbhomi Infotech</h3>
            <p className="text-background/80 mb-4">
              Premium IT solutions & digital marketing agency based in Rishikesh.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rishikesh, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@devbhomi.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-background transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-background/80 mb-3">Subscribe for latest updates on digital trends.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md text-foreground text-sm"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; 2026 Devbhomi Infotech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
