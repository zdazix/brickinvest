import type { PropsWithChildren } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LocaleProvider } from "@/lib/i18n";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CustomCursor } from "@/components/layout/CustomCursor";
export const SiteLayout = ({ children }: PropsWithChildren) => (
  <LocaleProvider>
    <CustomCursor />
    <SiteHeader />
    {children}
    <SiteFooter />
  </LocaleProvider>
);
