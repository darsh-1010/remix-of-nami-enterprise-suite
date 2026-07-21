"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { type FormResponse } from "@/lib/schemas";

export function CareersForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result: FormResponse = await response.json();

      if (!response.ok) {
        if (result.errors) {
          const errorMap = result.errors.reduce<Record<string, string>>((acc, err) => {
            acc[err.field] = err.message;
            return acc;
          }, {});
          setFieldErrors(errorMap);
        }
        setError(result.message || "Failed to submit application");
        return;
      }

      setSuccess(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred while submitting your application");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="card-glass max-w-xl mx-auto">
      <h3 className="font-display text-2xl text-foreground mb-6">Apply Now</h3>

      {success ? (
        <div className="rounded-2xl border border-gold/40 p-6 text-center">
          <h4 className="font-display text-lg text-gold mb-2">Thank you</h4>
          <p className="text-sm text-muted-foreground">
            Your application has been received. Our HR team will review your details and reach out
            shortly.
          </p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-6 text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-bright transition-colors cursor-pointer"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          <FormField
            label="Full Name"
            name="fullName"
            type="text"
            required
            error={fieldErrors.fullName}
            disabled={isLoading}
          />

          <FormField
            label="Email Address"
            name="email"
            type="email"
            required
            error={fieldErrors.email}
            disabled={isLoading}
          />

          <FormField
            label="Job Title"
            name="jobTitle"
            type="text"
            required
            placeholder="e.g. Associate — Investment Banking"
            error={fieldErrors.jobTitle}
            disabled={isLoading}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="resume" className="label-xs">
              Resume <span className="text-gold ml-1">*</span>
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="mt-2 w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-full file:text-xs file:font-semibold file:bg-gold file:text-ink hover:file:bg-gold-bright file:cursor-pointer cursor-pointer rounded-xl border border-border p-2"
              disabled={isLoading}
            />
            {fieldErrors.resume && (
              <span className="text-xs text-red-500">{fieldErrors.resume}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-3 button-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit Application"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
