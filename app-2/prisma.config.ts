import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

const ENV_PATH = ".env";

if (existsSync(ENV_PATH)) loadEnvFile(ENV_PATH);

const databaseUrl =
  process.env.DATABASE_URL ?? "postgresql://app:app@localhost:5432/app";

export default defineConfig({
  datasource: {
    url: databaseUrl,
  },
  migrations: {
    path: "prisma/migrations",
  },
  schema: "prisma/schema.prisma",
});
