import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/pages/legal/LegalPage";

export const Route = createFileRoute("/(layout)/terms")({
  component: () => <LegalPage kind="terms" />,
});
