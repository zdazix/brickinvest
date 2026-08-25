# React Vite TanStack Application

```bash
pnpm install
pnpm dev
pnpm format:check
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

# Analytics measurement

The frontend contains a consent-aware analytics layer in `src/lib/analytics.ts`.
When the BRICKINVEST cookie-consent flow is ready, it can grant analytics by
calling `window.grantBrickinvestAnalyticsConsent()` or dispatching the
`brickinvest:analytics-consent` event. No analytics or marketing tag loads
before that grant.

Add these public, non-secret Vite variables through the project environment
configuration when the real properties are available:

- `VITE_GTM_ID` — Google Tag Manager container ID
- `VITE_GA4_MEASUREMENT_ID` — Google Analytics 4 measurement ID

Both values are intentionally absent by default. The implementation never
sends form values, quiz answers, or other personally identifiable information.
