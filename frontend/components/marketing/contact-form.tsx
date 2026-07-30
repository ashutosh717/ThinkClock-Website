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
            "Request failed. Please email hello@thinkclock.com directly.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage("Message received. The team will follow up shortly.");
      reset();
    } catch {
      setStatus("error");
      setStatusMessage("Connection issue. Please try again in a minute.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-[var(--graphite)]/30 bg-white p-6 text-[var(--ink)] shadow-xl shadow-black/10 transition-all duration-500 hover:shadow-2xl">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold">Full name</label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-lg border border-[var(--graphite)]/40 px-3 py-2.5 text-sm transition-all focus:border-[var(--signal)] focus:ring-2 focus:ring-[var(--signal)]/20 focus:outline-none"
          placeholder="e.g. Alex Rivera"
        />
        {errors.name && <p className="mt-1 text-sm text-[var(--alert)]">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">Work email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-[var(--graphite)]/40 px-3 py-2.5 text-sm transition-all focus:border-[var(--signal)] focus:ring-2 focus:ring-[var(--signal)]/20 focus:outline-none"
          placeholder="e.g. alex@oem.com"
        />
        {errors.email && <p className="mt-1 text-sm text-[var(--alert)]">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold">Company</label>
        <input
          id="company"
          {...register("company")}
          className="w-full rounded-lg border border-[var(--graphite)]/40 px-3 py-2.5 text-sm transition-all focus:border-[var(--signal)] focus:ring-2 focus:ring-[var(--signal)]/20 focus:outline-none"
          placeholder="e.g. EV Fleet Inc."
        />
        {errors.company && <p className="mt-1 text-sm text-[var(--alert)]">{errors.company.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">What are you trying to solve?</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full rounded-lg border border-[var(--graphite)]/40 px-3 py-2.5 text-sm transition-all focus:border-[var(--signal)] focus:ring-2 focus:ring-[var(--signal)]/20 focus:outline-none resize-none"
          placeholder="Tell us about your battery diagnostics challenge..."
        />
        {errors.message && <p className="mt-1 text-sm text-[var(--alert)]">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[var(--signal)] px-5 py-3 font-semibold text-[var(--ink)] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[var(--signal)]/25 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Request a demo"
        )}
      </button>
      {status !== "idle" && (
        <div
          className={`flex items-center gap-2 rounded-lg p-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-[var(--alert)]"
          }`}
        >
          {status === "success" ? (
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {statusMessage}
        </div>
      )}
    </form>
  );
}
