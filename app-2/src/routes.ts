import { Router } from "express";

import { createInvestorRouter } from "./features/investor/investor.routes.js";
import { createSystemRouter } from "./features/system/system.routes.js";
import type { Database, DatabaseHealth } from "./lib/database/database.js";

type CreateApiRouterOptions = {
  readonly database?: DatabaseHealth;
  readonly client?: Database["client"];
};

export const createApiRouter = ({
  database,
  client,
}: CreateApiRouterOptions): Router => {
  const router = Router();

  router.use(createSystemRouter({ database }));
  router.use(createInvestorRouter(client));

  return router;
};
