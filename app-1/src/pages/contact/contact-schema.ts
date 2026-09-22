import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Geben Sie mindestens zwei Zeichen ein."),
  email: z.email("Geben Sie eine gültige E-Mail-Adresse ein."),
  subject: z.string().trim().min(3, "Geben Sie einen kurzen Betreff ein."),
  message: z.string().trim().min(20, "Geben Sie mindestens 20 Zeichen ein."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
