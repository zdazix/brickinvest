import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import { queryClient } from "@/lib/query-client";
import { routeTree } from "@/routeTree.gen";

import "@/index.css";

const routerBasePath =
  new URL(import.meta.env.BASE_URL, window.location.href).pathname.replace(
    /\/$/u,
    "",
  ) || "/";

const router = createRouter({
  basepath: routerBasePath,
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Application root element was not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>,
);
