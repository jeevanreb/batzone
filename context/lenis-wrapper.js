"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LenisWrapper({ children }) {
  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy();
    };
  }, []);

  // useEffect(() => {
  //   // Disable consoles
  //   const originalConsole = { ...console };
  //   Object.keys(console).forEach(
  //     (k) => typeof console[k] === "function" && (console[k] = () => {}),
  //   );

  //   // Disable context menu & drag
  //   const preventDefault = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", preventDefault);
  //   document.addEventListener("dragstart", preventDefault);

  //   // Key & scroll handlers
  //   const handleKeyDown = (e) => {
  //     if ((e.ctrlKey || e.metaKey) && ["=", "+", "-", "0"].includes(e.key)) {
  //       e.preventDefault();
  //     }

  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey &&
  //         e.shiftKey &&
  //         ["I", "J", "C"].includes(e.key.toUpperCase())) ||
  //       (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   const handleWheel = (e) => {
  //     if (e.ctrlKey) e.preventDefault();
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     // cleanup
  //     Object.assign(console, originalConsole);
  //     document.removeEventListener("contextmenu", preventDefault);
  //     document.removeEventListener("dragstart", preventDefault);
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  // ✅ Orientation / resize reload
  useEffect(() => {
    const handleOrientationChange = () => {
      window.location.reload();
    };

    // Works across devices
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  // Tab, mobile zoom, pinch restric
  useEffect(() => {
    // 1️⃣ Force viewport to be non-scalable
    const applyViewport = () => {
      const name = "viewport";
      const value =
        "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    };
    applyViewport();

    // 2️⃣ Disable gesture zoom (iOS Safari)
    const preventGesture = (e) => e.preventDefault();
    window.addEventListener("gesturestart", preventGesture, { passive: false });
    window.addEventListener("gesturechange", preventGesture, {
      passive: false,
    });
    window.addEventListener("gestureend", preventGesture, { passive: false });

    // 3️⃣ Disable pinch zoom (multi-touch)
    const preventPinch = (e) => {
      if (e.touches && e.touches.length > 1) e.preventDefault();
    };
    document.addEventListener("touchmove", preventPinch, { passive: false });

    // 4️⃣ Disable double-tap zoom
    let lastTouchEnd = 0;
    const preventDoubleTap = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) e.preventDefault();
      lastTouchEnd = now;
    };
    document.addEventListener("touchend", preventDoubleTap, false);

    // 5️⃣ Optional: block all zoom gestures via CSS
    const html = document.documentElement;
    const prevTouchAction = html.style.touchAction;
    const prevMsTouchAction = html.style.msTouchAction;
    if (window.innerWidth >= 768) {
      html.style.touchAction = "none";
      html.style.msTouchAction = "none";
    }

    return () => {
      window.removeEventListener("gesturestart", preventGesture);
      window.removeEventListener("gesturechange", preventGesture);
      window.removeEventListener("gestureend", preventGesture);
      document.removeEventListener("touchmove", preventPinch);
      document.removeEventListener("touchend", preventDoubleTap);
      html.style.touchAction = prevTouchAction;
      html.style.msTouchAction = prevMsTouchAction;
    };
  }, []);

  // ====== STORING CURRENT PATH ==========

  const pathName = usePathname()

  useEffect(() => {
    sessionStorage.setItem("currentPath", `payment-hedron${pathName}`)
  },[pathName])

  return <>{children}</>;
}
