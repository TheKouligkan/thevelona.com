"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const revealSelector = [
  ".brand-intro > *",
  ".section-heading > *",
  ".drop-banner > *",
  ".story > *",
  ".craft > *",
  ".wholesale-home-grid > *",
  ".newsletter > *",
  ".inner-hero-split > *",
  ".page-outro > *",
  ".collection-editorial > *",
  ".legacy-section > *",
  ".featured-story > *",
  ".faq-grid > *",
  ".product-detail > *",
  ".product-story-grid > *",
  ".product-media-section > *",
  ".product-contact-band .page-shell",
  ".collection-card",
  ".product-card",
  ".journal-card",
  ".brand-principles article",
  ".craft-facts > div",
  ".wholesale-details > div",
  ".footer-main > *",
].join(",");

const magneticSelector = ".button, .collection-arrow, .product-view";

export function MotionLayer() {
  const pathname = usePathname();
  const frame = useRef<number | null>(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.toggle("motion-enhanced", !reducedMotion);
    if (reducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const groups = new Map<Element | null, number>();

    elements.forEach((element) => {
      const group = element.parentElement;
      const groupIndex = groups.get(group) ?? 0;
      groups.set(group, groupIndex + 1);
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(groupIndex, 5) * 70}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateScroll = () => {
      frame.current = null;
      const scrollRange = Math.max(root.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--hero-drift", `${Math.min(window.scrollY * 0.075, 72).toFixed(1)}px`);
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const controls = Array.from(document.querySelectorAll<HTMLElement>(magneticSelector));
    const cleanups = controls.map((control) => {
      const onMove = (event: PointerEvent) => {
        const bounds = control.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        control.style.setProperty("--magnet-x", `${(x * 5).toFixed(2)}px`);
        control.style.setProperty("--magnet-y", `${(y * 4 - 2).toFixed(2)}px`);
      };
      const onLeave = () => {
        control.style.setProperty("--magnet-x", "0px");
        control.style.setProperty("--magnet-y", "0px");
      };
      control.addEventListener("pointermove", onMove);
      control.addEventListener("pointerleave", onLeave);
      return () => {
        control.removeEventListener("pointermove", onMove);
        control.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname]);

  return (
    <div className="scroll-thread" aria-hidden="true">
      <span className="scroll-thread-label">Follow the thread</span>
      <span className="scroll-thread-line" />
      <span className="scroll-thread-knot" />
    </div>
  );
}
