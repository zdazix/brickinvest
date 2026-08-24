import type { RequestHandler } from "express";

import type { DatabaseClient } from "../../lib/database/database.js";
import { HttpError } from "../../lib/http/http-error.js";
import type { InvestorSubmissionInput } from "./investor.schemas.js";
import { saveInvestorSubmission } from "./investor.services.js";

export const createInvestorSubmissionHandler =
  (client?: DatabaseClient): RequestHandler =>
  async (request, response) => {
    if (!client)
      throw new HttpError(
        503,
        "DATABASE_UNAVAILABLE",
        "Submission service is unavailable.",
      );
    const input = response.locals.input.body as InvestorSubmissionInput;
    let submission;
    try {
      submission = await saveInvestorSubmission(client, {
        ...input,
        source: input.source ?? "Investor qualification form",
      });
    } catch (error) {
      request.log.error({ error }, "Investor submission persistence failed");
      throw new HttpError(
        503,
        "DATABASE_PERSISTENCE_FAILED",
        "The native investor database could not store this submission.",
      );
    }
    request.log.info(
      { submissionId: submission.id },
      "Investor submission stored",
    );
    response.status(201).json({ id: submission.id, status: "received" });
  };
