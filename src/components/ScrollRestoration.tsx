import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If we're on the index page, we don't want to scroll to top automatically
    // because we want to preserve the scroll position.
    // However, if we're navigating TO a specific property page, we SHOULD scroll to top.
    if (pathname.startsWith("/property/")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
