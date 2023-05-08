// App
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { isProduction } from "lib/constants/enviroment";

// App Providers
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { QueryClientProvider } from "@tanstack/react-query";

// Components
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { reactQueryClient } from "lib/clients/react-query";

// Styles

import "./index.css";

Sentry.init({
  dsn: isProduction
    ? import.meta.env.VITE_SENTRY_DSN_PROD
    : import.meta.env.VITE_SENTRY_DSN_DEV,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: import.meta.env.VITE_NODE_ENV,
  integrations: [new BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
