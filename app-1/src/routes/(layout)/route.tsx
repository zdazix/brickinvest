import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";

const SiteRouteLayout = () => (
  <SiteLayout>
    <Outlet />
  </SiteLayout>
);

export const Route = createFileRoute("/(layout)")({
  component: SiteRouteLayout,
});
