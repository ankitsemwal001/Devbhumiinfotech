"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type ChatRole = "bot" | "user";

interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
}

const QUICK_REPLIES = [
  "Website design",
  "Pricing",
  "AI automation",
  "Talk to a human",
];

const GREETING: ChatMessage = {
  id: "greeting",
  role: "bot",
  text: "Hi! I'm the Devbhoomi AI Assistant. Ask me about our websites, software, or AI automation services.",
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getCannedReply(input: string): string {
  const text = input.toLowerCase();

  if (/(price|pricing|cost|budget|quote|charge)/.test(text)) {
    return "Website packages start from ₹15,000, with comprehensive multi-page platforms from ₹40,000. Custom software, AI automation, and SEO retainers are quoted per scope. Want a detailed estimate?";
  }
  if (/(website|design|web design|ui|ux)/.test(text)) {
    return "We craft custom, mobile-first, SEO-ready websites on Next.js — built for speed and conversions. Share your goals and I'll point you to the right package.";
  }
  if (/(seo|marketing|growth|rank|google|geo)/.test(text)) {
    return "Our digital growth practice covers technical SEO, local SEO across Uttarakhand, and Generative Engine Optimisation (GEO) for AI search engines. Shall I connect you with a strategist?";
  }
  if (/(automation|ai|bot|chatbot|workflow)/.test(text)) {
    return "We build AI chatbots, n8n workflows, and WhatsApp automation that cut manual work. Tell me which process you'd like to automate and our team will scope it.";
  }
  if (/(software|saas|app|portal|dashboard)/.test(text)) {
    return "We engineer custom software, SaaS platforms, and business dashboards with 100% source-code ownership. What problem should the software solve?";
  }
  if (/(human|whatsapp|call|person|contact|talk)/.test(text)) {
    return "Sure — tap the WhatsApp icon (bottom-left) or the link below to chat with our team in Rishikesh directly, Monday to Saturday, 09:30 AM – 06:30 PM IST.";
  }
  return "Thanks for your message! This is a demo assistant — for detailed guidance our team in Rishikesh will follow up. You can also reach us instantly on WhatsApp.";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sendMessage = useCallback((rawText: string) => {
    const text = rawText.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: createId(), role: "user", text },
    ]);
    setInput("");
    setIsTyping(true);

    if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    replyTimerRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "bot", text: getCannedReply(text) },
      ]);
      setIsTyping(false);
    }, 850);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 150);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Devbhoomi AI Assistant chat"
          className="absolute bottom-20 right-0 flex h-[min(560px,calc(100vh-8rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/25 animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-200 dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-3.5 text-white">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
              <Bot className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-emerald-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Devbhoomi AI Assistant
              </p>
              <p className="truncate text-xs text-white/80">
                Online · replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4 dark:bg-slate-950/40"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-full",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "flex max-w-[80%] items-start gap-2 rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    message.role === "user"
                      ? "rounded-br-sm bg-gradient-to-br from-blue-600 to-blue-500 text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
                  )}
                >
                  {message.role === "bot" && (
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  )}
                  <span>{message.text}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3.5 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && !isTyping && (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-950"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-100 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="h-10 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-800"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-md transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] leading-tight text-slate-400">
              AI assistant · For urgent help,{" "}
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
              >
                chat on WhatsApp
              </a>
            </p>
          </form>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
        aria-expanded={isOpen}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </span>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
