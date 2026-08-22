import type { PropsWithChildren } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LocaleProvider } from "@/lib/i18n";
export const SiteLayout = ({ children }: PropsWithChildren) => (
  <LocaleProvider>
    <SiteHeader />
    {children}
  </LocaleProvider>
);
