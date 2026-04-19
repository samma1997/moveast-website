import { z } from "zod";
import { sectors } from "@/content/sectors";

const SECTOR_SLUGS = [...sectors.map((s) => s.slug), "other"] as const;
const VOLUME_VALUES = ["small", "medium", "large", "enterprise"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(100),
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  company: z.string().trim().max(140).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  sector: z.enum(SECTOR_SLUGS).optional().or(z.literal("")),
  volume: z.enum(VOLUME_VALUES).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Tell us a bit more (20+ chars)").max(4000),
  // Honeypot — must be empty
  website: z.string().max(0, "Spam detected").optional().default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "Privacy consent is required" }) }),
});

export type ContactInput = z.infer<typeof contactSchema>;
