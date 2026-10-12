"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2, MessageSquare, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (at least 10 characters)"),
  honeypot: z.string().max(0, "Bot detected"),
});

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Website Design & Development",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  const handleFocus = () => {
    if (!formStarted) {
      setFormStarted(true);
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "form_start" });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Client-side Zod validation
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Bot detection check
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Static-safe submission:
      // If a webhook endpoint is provided (e.g. n8n or Hostinger PHP mailer), POST to it
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        }).catch((err) => {
          console.warn("Endpoint delivery fallback:", err);
        });
      }

      // Track analytics conversion event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit",
          service: formData.service,
        });
      }

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Devbhoomi Infotech,%0A%0AMy name is ${encodeURIComponent(
      formData.fullName
    )}.%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0AService Needed: ${encodeURIComponent(
      formData.service
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
    return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="text-center py-10 space-y-5 animate-in fade-in"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Thank You for Reaching Out
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Your project inquiry has been received. Our team will review your requirements and follow up promptly during business hours.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppPrefillUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp Instantly</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden for users, triggers for bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company Website</label>
            <input
              type="text"
              id="company_website"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onFocus={handleFocus}
              onChange={handleChange}
              placeholder="e.g. Ankit Semwal"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all"
            />
            {errors.fullName && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onFocus={handleFocus}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all"
              />
              {errors.email && (
                <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Phone / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onFocus={handleFocus}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all"
              />
              {errors.phone && (
                <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Primary Service of Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all"
            >
              <option value="AI & Business Automation">AI & Business Automation</option>
              <option value="Custom Software & SaaS">Custom Software & SaaS Development</option>
              <option value="Website Design & Development">Website Design & Web Development</option>
              <option value="Digital Growth & SEO">Digital Growth, SEO & GEO</option>
              <option value="General Consultation">General Discussion / Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Project Overview <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onFocus={handleFocus}
              onChange={handleChange}
              placeholder="Tell us about your project goals, current challenges, and desired timeline..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all resize-none"
            />
            {errors.message && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Your Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Project Inquiry</span>
              </>
            )}
          </Button>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            We value your privacy. Your information is strictly used for project consultation.
          </p>
        </form>
      )}
    </div>
  );
}
