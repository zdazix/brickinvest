import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter at least two characters."),
  email: z.email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Add a short subject."),
  message: z.string().trim().min(20, "Add at least 20 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
