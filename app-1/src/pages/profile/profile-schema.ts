import { z } from "zod";

export const profileSchema = z.object({
  accountType: z.enum(["personal", "business"]).or(z.literal("")),
  dateOfBirth: z.string(),
  displayName: z.string().trim().min(2, "Enter at least two characters."),
  email: z.email("Enter a valid email address."),
  role: z.string().trim().min(2, "Add a role or title."),
  bio: z.string().trim().max(240, "Keep the bio under 240 characters."),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
