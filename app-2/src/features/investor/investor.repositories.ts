import type { DatabaseClient } from "../../lib/database/database.js";
import type { InvestorSubmissionInput } from "./investor.schemas.js";

export const createInvestorSubmission = async (
  client: DatabaseClient,
  input: InvestorSubmissionInput,
) =>
  client.investorSubmission.create({
    data: { ...input, consentAt: new Date() },
  });
