import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Sisestage vähemalt kaks tähemärki."),
  email: z.email("Sisestage kehtiv e-posti aadress."),
  subject: z.string().trim().min(3, "Sisestage lühike teema."),
  message: z.string().trim().min(20, "Sisestage vähemalt 20 tähemärki."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
