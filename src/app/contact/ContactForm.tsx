"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { FormField, FormSelect, FormTextarea } from "@/components/forms/FormField";
import { contactFormSchema, type ContactFormData, type FormResponse } from "@/lib/schemas";
import { INTEREST_OPTIONS } from "@/lib/constants";

export function ContactForm() {
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
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        org: formData.get("org") as string,
        phone: formData.get("phone") as string,
        interest: formData.get("interest") as string,
        message: formData.get("message") as string,
      };

      // Validate
      const validatedData = contactFormSchema.parse(data);

      // Submit
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
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
        setError(result.message || "Failed to submit form");
        return;
      }

      setSuccess(true);
      (e.currentTarget as HTMLFormElement).reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred while submitting the form");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass">
      <h2 className="font-display text-2xl text-foreground mb-8">Enquiry</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
          Thank you! We&apos;ve received your inquiry and will be in touch shortly.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField
          label="Full name"
          name="name"
          type="text"
          required
          error={fieldErrors.name}
          disabled={isLoading}
        />
        <FormField
          label="Organisation"
          name="org"
          type="text"
          error={fieldErrors.org}
          disabled={isLoading}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          error={fieldErrors.email}
          disabled={isLoading}
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          error={fieldErrors.phone}
          disabled={isLoading}
        />

        <div className="sm:col-span-2">
          <FormSelect
            label="Area of interest"
            name="interest"
            options={INTEREST_OPTIONS as unknown as string[]}
            required
            placeholder="Select an option"
            error={fieldErrors.interest}
            disabled={isLoading}
          />
        </div>

        <div className="sm:col-span-2">
          <FormTextarea
            label="Message"
            name="message"
            rows={5}
            required
            error={fieldErrors.message}
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-10 button-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : success ? "Received — we'll be in touch" : "Send Enquiry"}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
