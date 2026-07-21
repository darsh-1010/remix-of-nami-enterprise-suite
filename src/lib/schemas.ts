import { z } from "zod";
import { INTEREST_OPTIONS } from "./constants";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  org: z.string().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  interest: z.enum(INTEREST_OPTIONS, {
    errorMap: () => ({ message: "Please select an area of interest" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const careersFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  jobTitle: z.string().min(2, "Please enter the job title you're applying for"),
  resume: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "Resume must be under 5MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Resume must be PDF or DOC",
    ),
});

export type CareersFormData = z.infer<typeof careersFormSchema>;

export const subscribeFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional().or(z.literal("")),
});

export type SubscribeFormData = z.infer<typeof subscribeFormSchema>;

// Form validation error response
export const formErrorSchema = z.object({
  field: z.string(),
  message: z.string(),
});

export type FormError = z.infer<typeof formErrorSchema>;

// Form submission response
export const formResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  errors: z.array(formErrorSchema).optional(),
});

export type FormResponse = z.infer<typeof formResponseSchema>;
