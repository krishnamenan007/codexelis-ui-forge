import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-74Q9Z2E5NS";

const GATracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const page_path = location.pathname + location.search + location.hash;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path });
  }, [location]);

  return null;
};

export default GATracker;
