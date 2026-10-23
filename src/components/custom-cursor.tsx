"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!root || !dot || !ring) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionAllowed = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let enabled = false;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let hasPosition = false;

    const hide = () => root.classList.remove("is-visible", "is-hovering", "is-pressed");
    const syncPreference = () => {
      enabled = finePointer.matches && motionAllowed.matches;
      document.documentElement.classList.toggle("has-custom-cursor", enabled);
      if (!enabled) hide();
    };
    const animate = () => {
      ringX += (targetX - ringX) * 0.24;
      ringY += (targetY - ringY) * 0.24;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      if (Math.abs(targetX - ringX) > 0.3 || Math.abs(targetY - ringY) > 0.3) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };
    const onMove = (event: PointerEvent) => {
      if (!enabled || event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasPosition) {
        ringX = targetX;
        ringY = targetY;
        hasPosition = true;
      }
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      root.classList.add("is-visible");
      root.classList.toggle("is-hovering", event.target instanceof Element && Boolean(event.target.closest("a, button, [role='button']")));
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const onDown = () => root.classList.add("is-pressed");
    const onUp = () => root.classList.remove("is-pressed");

    syncPreference();
    finePointer.addEventListener("change", syncPreference);
    motionAllowed.addEventListener("change", syncPreference);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      finePointer.removeEventListener("change", syncPreference);
      motionAllowed.removeEventListener("change", syncPreference);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={rootRef} className="custom-cursor" aria-hidden="true"><span ref={ringRef} className="cursor-ring" /><span ref={dotRef} className="cursor-dot" /></div>;
}
