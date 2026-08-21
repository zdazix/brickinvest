import { requireDatabaseUrl } from "../config.js";
import { createDatabase } from "./database.js";
import { runDatabaseMigrations } from "./migrations.js";

const run = async (): Promise<void> => {
  const database = createDatabase(requireDatabaseUrl());

  try {
    await runDatabaseMigrations(database);
  } finally {
    await database.close();
  }
};

void run().catch(() => {
  process.stderr.write("Database migration failed.\n");
  process.exitCode = 1;
});
