import { z } from "zod";

export const investorSubmissionSchema = z.object({
  objective: z.string().trim().min(1).max(100),
  budget: z.string().trim().min(1).max(40),
  opportunityType: z.string().trim().min(1).max(100),
  locations: z.string().trim().min(1).max(100),
  timing: z.string().trim().min(1).max(50),
  firstName: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  phone: z
    .string()
    .trim()
    .regex(/^\+[1-9]\d{7,14}$/, "Use an international phone number."),
  consent: z.literal(true),
});
export type InvestorSubmissionInput = z.infer<typeof investorSubmissionSchema>;
