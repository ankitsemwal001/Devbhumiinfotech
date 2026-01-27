'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/15 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-orange-300/18 via-cyan-500/10 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="mb-10">
          <h1 className="text-9xl md:text-[200px] font-black bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Page Not Found
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-xl mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/30"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-orange-400 hover:bg-orange-50 text-orange-700 font-bold text-xl transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        <p className="mt-16 text-sm text-gray-500">
          Need help? <a href="/contact" className="text-teal-600 hover:text-teal-800 underline">Contact support</a>
        </p>
      </div>
    </div>
  );
}