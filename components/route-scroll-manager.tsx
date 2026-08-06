"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function RouteScrollManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isHistoryNavigation = useRef(false);

  useEffect(() => {
    const rememberHistoryNavigation = () => {
      isHistoryNavigation.current = true;
    };

    window.addEventListener("popstate", rememberHistoryNavigation);
    return () => window.removeEventListener("popstate", rememberHistoryNavigation);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Keep the browser's natural position restoration for Back and Forward.
    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false;
      return;
    }

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [pathname]);

  return null;
}
