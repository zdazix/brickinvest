import { z } from "zod";

export const profileSchema = z.object({
  accountType: z.enum(["personal", "business"]).or(z.literal("")),
  dateOfBirth: z.string(),
  displayName: z.string().trim().min(2, "Sisestage vähemalt kaks tähemärki."),
  email: z.email("Sisestage kehtiv e-posti aadress."),
  role: z.string().trim().min(2, "Sisestage ametikoht või roll."),
  bio: z
    .string()
    .trim()
    .max(240, "Kirjeldus võib sisaldada kuni 240 tähemärki."),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
