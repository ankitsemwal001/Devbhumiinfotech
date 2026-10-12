"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("dbi_cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    } catch {
      // localStorage may be disabled
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("dbi_cookie_consent", "granted");
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "granted",
        });
      }
    } catch {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("dbi_cookie_consent", "denied");
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
        });
      }
    } catch {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent Banner"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-950/95 text-slate-100 border-t border-slate-800 backdrop-blur-md shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-slate-300 leading-relaxed text-center sm:text-left">
          We use essential cookies and anonymous analytics to understand site performance and enhance your experience. See our{" "}
          <Link
            href="/privacy-policy/"
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
