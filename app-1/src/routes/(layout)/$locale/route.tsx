import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

import { isLocaleKey } from "@/lib/locales";

export const Route = createFileRoute("/(layout)/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocaleKey(params.locale)) throw notFound();
  },
  component: () => <Outlet />,
});
