"use client";

import { useState } from "react";
import { ProcessStep } from "@/types/service";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface ProcessTabsProps {
  steps: ProcessStep[];
}

export function ProcessTabs({ steps }: ProcessTabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(steps[0]?.id || "1");
  const activeStep = steps.find((s) => s.id === activeTabId) || steps[0];

  if (!steps || steps.length === 0) return null;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4 flex flex-col gap-2.5">
        {steps.map((step, index) => {
          const isActive = step.id === activeTabId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveTabId(step.id)}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 translate-x-1"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? "bg-white text-blue-600"
                      : "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                  }`}
                >
                  0{index + 1}
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  {step.title}
                </span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isActive ? "text-white rotate-90 lg:rotate-0" : "text-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm min-h-[380px]">
        <AnimatePresence mode="wait">
          {activeStep && (
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {activeStep.subtitle && (
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
                  {activeStep.subtitle}
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {activeStep.title}
              </h3>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
                  Deliverables & Highlights:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
