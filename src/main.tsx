import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    autocapture: true,
    capture_pageview: true,
  });
}

createRoot(document.getElementById("root")!).render(<App />);
