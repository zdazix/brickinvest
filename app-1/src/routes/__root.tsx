import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

import { ErrorPage } from "@/pages/error-page";
import { NotFoundPage } from "@/pages/not-found-page";

const RootComponent = () => (
  <>
    <HeadContent />
    <a
      className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg transition focus:translate-y-0"
      href="#main-content"
    >
      Skip to main content
    </a>
    <Outlet />
  </>
);

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ({ reset }) => <ErrorPage reset={reset} />,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BRICKINVEST | Costa del Sol Investment Platform" },
    ],
    links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  }),
  notFoundComponent: NotFoundPage,
});
