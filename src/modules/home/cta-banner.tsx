import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold ">
          Ready to Scale Your Business Online?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Let’s discuss your vision, audit your website, and construct a high-impact digital plan tailored for your market.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-12 shadow-xl"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/60 text-black hover:bg-white/10 font-semibold px-8 h-12"
          >
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span className="text-black">Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
