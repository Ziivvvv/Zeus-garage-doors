import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import posthog from "posthog-js";

// Initialize PostHog — replace env vars in .env before going live
posthog.init(import.meta.env.VITE_POSTHOG_KEY || "YOUR_POSTHOG_KEY_HERE", {
  api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: true,
});

createRoot(document.getElementById("root")!).render(<App />);
