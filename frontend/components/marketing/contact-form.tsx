"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { API_BASE_URL } from "@/lib/api-base";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Please include your company or organization."),
  message: z.string().min(20, "Tell us a bit more so we can route your request."),
});

type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: { message?: string } }
          | null;
        setStatus("error");
        setStatusMessage(
          payload?.error?.message ??
            "Request failed. Please email contact@thinkclock.com directly.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage("Message received. Our engineering team will follow up within 24 hours.");
      reset();
    } catch {
      setStatus("error");
      setStatusMessage("Connection issue. Please try again or email contact@thinkclock.com.");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-2xl transition-all duration-300">
      <div>
        <div className="mb-5">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--paper)]">
            Send Us an Enquiry
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[var(--graphite-on-dark)]">
            Fill in your details below and our team will get back to you promptly.
          </p>
        </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
            Full Name <span className="text-[var(--copper)]">*</span>
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-4 py-3 text-sm text-[var(--paper)] placeholder:text-[var(--graphite-on-dark)]/50 focus:border-[var(--signal)] focus:outline-none focus:ring-1 focus:ring-[var(--signal)] transition-colors"
            placeholder="e.g. Alex Rivera"
          />
          {errors.name && <p className="mt-1 font-mono text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
            Work Email <span className="text-[var(--copper)]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-4 py-3 text-sm text-[var(--paper)] placeholder:text-[var(--graphite-on-dark)]/50 focus:border-[var(--signal)] focus:outline-none focus:ring-1 focus:ring-[var(--signal)] transition-colors"
            placeholder="e.g. alex@oem.com"
          />
          {errors.email && <p className="mt-1 font-mono text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
            Company / Organization <span className="text-[var(--copper)]">*</span>
          </label>
          <input
            id="company"
            {...register("company")}
            className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-4 py-3 text-sm text-[var(--paper)] placeholder:text-[var(--graphite-on-dark)]/50 focus:border-[var(--signal)] focus:outline-none focus:ring-1 focus:ring-[var(--signal)] transition-colors"
            placeholder="e.g. EV Fleet Inc."
          />
          {errors.company && <p className="mt-1 font-mono text-xs text-red-500">{errors.company.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
            What are you trying to solve? <span className="text-[var(--copper)]">*</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full resize-none rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-4 py-3 text-sm text-[var(--paper)] placeholder:text-[var(--graphite-on-dark)]/50 focus:border-[var(--signal)] focus:outline-none focus:ring-1 focus:ring-[var(--signal)] transition-colors"
            placeholder="Tell us about your battery cell grading, diagnostics, or throughput requirements..."
          />
          {errors.message && <p className="mt-1 font-mono text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[var(--signal)]/50 bg-[var(--signal)] px-6 py-3.5 font-sans text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-[var(--signal)]/25 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
          >
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>{isSubmitting ? "Sending Request..." : "Request a Demo / Consultation"}</span>
          </button>
        </div>

        {status !== "idle" && (
          <div
            role="status"
            aria-live="polite"
            className={`flex items-center gap-2.5 rounded-[8px] p-4 text-xs font-mono font-medium ${
              status === "success"
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                : "bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300"
            }`}
          >
            {status === "success" ? (
              <svg className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span>{statusMessage}</span>
          </div>
        )}
      </form>
      </div>
    </div>
  );
}
