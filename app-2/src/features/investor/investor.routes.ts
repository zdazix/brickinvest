import { Router } from "express";

import type { DatabaseClient } from "../../lib/database/database.js";
import { validateRequest } from "../../lib/http/validate-request.js";
import { createInvestorSubmissionHandler } from "./investor.handlers.js";
import { investorSubmissionSchema } from "./investor.schemas.js";

export const createInvestorRouter = (client?: DatabaseClient): Router => {
  const router = Router();
  router.post(
    "/investor-submissions",
    validateRequest({ body: investorSubmissionSchema }),
    createInvestorSubmissionHandler(client),
  );
  return router;
};
