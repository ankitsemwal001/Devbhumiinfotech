import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Layers, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Devbhoomi Infotech",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-background">
      <div className="max-w-md mx-auto space-y-6">
        <span className="inline-block text-7xl font-extrabold text-blue-600 dark:text-blue-400">
          404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          The requested page does not exist or has been relocated. Please navigate using the primary links below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button
            asChild
            className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto rounded-full border-slate-300 dark:border-slate-700 px-6"
          >
            <Link href="/services/" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>View Services</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full sm:w-auto rounded-full px-6"
          >
            <Link href="/contact/" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Contact Team</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
