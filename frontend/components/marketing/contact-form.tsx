"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { API_BASE_URL } from "@/lib/api-base";
import { SendButton } from "@/components/ui/send-button";

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
    <div className="uiverse-form-container text-[var(--ink)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-[#1089d3] uppercase tracking-wider">
            Full name
          </label>
          <input
            id="name"
            {...register("name")}
            className="uiverse-input"
            placeholder="e.g. Alex Rivera"
          />
          {errors.name && <p className="mt-1 ml-2 text-xs text-[var(--alert)]">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#1089d3] uppercase tracking-wider">
            Work email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="uiverse-input"
            placeholder="e.g. alex@oem.com"
          />
          {errors.email && <p className="mt-1 ml-2 text-xs text-[var(--alert)]">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-[#1089d3] uppercase tracking-wider">
            Company
          </label>
          <input
            id="company"
            {...register("company")}
            className="uiverse-input"
            placeholder="e.g. EV Fleet Inc."
          />
          {errors.company && <p className="mt-1 ml-2 text-xs text-[var(--alert)]">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[#1089d3] uppercase tracking-wider">
            What are you trying to solve?
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="uiverse-input resize-none"
            placeholder="Tell us about your battery diagnostics challenge..."
          />
          {errors.message && <p className="mt-1 ml-2 text-xs text-[var(--alert)]">{errors.message.message}</p>}
        </div>
        <div className="pt-2">
          <SendButton
            type="submit"
            disabled={isSubmitting}
            label={isSubmitting ? "Sending" : "Request a demo"}
            className="w-full"
          />
        </div>
        {status !== "idle" && (
          <div
            className={`flex items-center gap-2 rounded-2xl p-3 text-sm ${
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

      <div className="uiverse-social-container">
        <span className="uiverse-social-title">Or Connect via</span>
        <div className="uiverse-social-accounts">
          <button type="button" className="uiverse-social-button" aria-label="Google">
            <svg viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </button>
          <button type="button" className="uiverse-social-button" aria-label="Apple">
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </button>
          <button type="button" className="uiverse-social-button" aria-label="Twitter">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </button>
        </div>
      </div>

      <span className="uiverse-agreement">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );

}
