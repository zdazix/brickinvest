import { z } from "zod";

export const profileSchema = z.object({
  accountType: z.enum(["personal", "business"]).or(z.literal("")),
  dateOfBirth: z.string(),
  displayName: z
    .string()
    .trim()
    .min(2, "Geben Sie mindestens zwei Zeichen ein."),
  email: z.email("Geben Sie eine gültige E-Mail-Adresse ein."),
  role: z
    .string()
    .trim()
    .min(2, "Geben Sie eine Position oder Berufsbezeichnung ein."),
  bio: z
    .string()
    .trim()
    .max(240, "Die Beschreibung darf höchstens 240 Zeichen enthalten."),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
