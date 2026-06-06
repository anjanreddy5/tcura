import { useState, useEffect } from "react";
import App from "./App";
import { DoctorsPage } from "./pages/DoctorsPage";
import { HospitalsPage } from "./pages/HospitalsPage";
import { TreatmentsPage } from "./pages/TreatmentsPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";

export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      // Scroll to top when path changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener("popstate", handleLocationChange);

    // Override pushState and replaceState to detect programmatic navigation
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // Simple routing logic
  const renderPage = () => {
    switch (currentPath) {
      case "/doctors":
        return <DoctorsPage />;
      case "/hospitals":
        return <HospitalsPage />;
      case "/treatments":
        return <TreatmentsPage />;
      case "/checkout":
        return <CheckoutPage />;
      case "/profile":
        return <ProfilePage />;
      case "/about":
        return <AboutPage />;
      case "/contact":
        return <ContactPage />;
      default:
        return <App />;
    }
  };

  return <CartProvider>{renderPage()}</CartProvider>;
}

