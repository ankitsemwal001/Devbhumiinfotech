import Link from "next/link";
import { Quote, Star, ArrowRight, MessageSquareQuote, BadgeCheck } from "lucide-react";
import { getPermittedReviews, type ReviewItem } from "@/content/reviews";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

function TestimonialCard({ review }: { review: ReviewItem }) {
  return (
    <article className="flex h-full w-[320px] sm:w-[380px] shrink-0 flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-200">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <Quote className="w-8 h-8 text-blue-500/30" />
          {typeof review.rating === "number" && (
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < (review.rating ?? 0)
                      ? "w-4 h-4 fill-amber-400 text-amber-400"
                      : "w-4 h-4 text-slate-300 dark:text-slate-700"
                  }
                />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">
            {review.author}
          </div>
          {review.date && (
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {review.date}
            </div>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 px-2.5 py-1 rounded-full shrink-0">
          <BadgeCheck className="w-3.5 h-3.5" />
          {review.source === "google" ? "Google" : "Verified"}
        </span>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const reviews = getPermittedReviews();
  const hasReviews = reviews.length > 0;

  const averageRating = hasReviews
    ? (
        reviews.reduce((sum, review) => sum + (review.rating ?? 5), 0) /
        reviews.length
      ).toFixed(1)
    : null;

  const marqueeTrack = [...reviews, ...reviews];

  const fadeMask =
    "linear-gradient(to right, transparent, black 6%, black 94%, transparent)";

  return (
    <section
      id="testimonials"
      className="py-20 bg-slate-50 dark:bg-slate-900/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Genuine, verified feedback from businesses we have partnered with
            across worldwide.
          </p>
        </div>

        
      </div>

      {hasReviews ? (
        <div
          className="relative w-full overflow-hidden group"
          style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
        >
          <div className="flex w-max select-none [--marquee-duration:60s]">
            {[0, 1].map((track) => (
              <div
                key={track}
                aria-hidden={track === 1}
                className="flex shrink-0 items-stretch gap-6 pr-6 animate-marquee group-hover:[animation-play-state:paused]"
              >
                {marqueeTrack.map((review, index) => (
                  <TestimonialCard
                    key={`${track}-${index}-${review.id}`}
                    review={review}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-10 sm:p-14 space-y-5">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/40">
              <MessageSquareQuote className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              We publish only genuine, verified feedback
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We never display fabricated testimonials. As client reviews are
              collected and written permission is granted, they will appear
              here. Worked with us? Your honest feedback helps other businesses
              choose with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                asChild
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6"
              >
                <Link href="/contact/" className="flex items-center gap-2">
                  <span>Share Your Feedback</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 dark:border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
