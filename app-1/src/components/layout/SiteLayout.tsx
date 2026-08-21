import { useRouterState } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

import { ContactHelper } from "@/components/layout/ContactHelper";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const SiteLayout = ({ children }: PropsWithChildren) => {
  const isHomePage = useRouterState({
    select: (state) => state.location.pathname === "/",
  });

  return (
    <>
      <SiteHeader />
      {children}
      <ContactHelper />
      {!isHomePage && <SiteFooter />}
    </>
  );
};
