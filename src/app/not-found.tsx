import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-background">
      <span className="text-6xl font-black text-blue-600 mb-4">404</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for does not exist or has been moved to a new URL.
      </p>
      <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
