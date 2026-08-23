import { z } from "zod";

export const investorSubmissionSchema = z.object({
  objective: z.string().trim().min(1).max(100).optional(),
  budget: z.string().trim().min(1).max(40).optional(),
  opportunityType: z.string().trim().min(1).max(100).optional(),
  locations: z.string().trim().min(1).max(100).optional(),
  timing: z.string().trim().min(1).max(50).optional(),
  firstName: z.string().trim().min(2).max(100),
  email: z.email().max(254).optional(),
  phone: z
    .string()
    .trim()
    .regex(/^\+[1-9]\d{7,14}$/, "Use an international phone number.")
    .optional(),
  consent: z.literal(true).optional(),
}).refine((value) => Boolean(value.email || value.phone), {
  message: "Email or phone number is required.",
  path: ["email"],
});
export type InvestorSubmissionInput = z.infer<typeof investorSubmissionSchema>;
