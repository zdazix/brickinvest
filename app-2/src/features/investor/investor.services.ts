import type { DatabaseClient } from "../../lib/database/database.js";
import { createInvestorSubmission } from "./investor.repositories.js";
import type { InvestorSubmissionInput } from "./investor.schemas.js";

export const saveInvestorSubmission = (
  client: DatabaseClient,
  input: InvestorSubmissionInput,
) => createInvestorSubmission(client, input);
