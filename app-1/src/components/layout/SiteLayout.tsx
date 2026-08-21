import type { PropsWithChildren } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
export const SiteLayout = ({ children }: PropsWithChildren) => (
  <>
    <SiteHeader />
    {children}
  </>
);
