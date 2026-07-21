"use client";

import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";

export default function LottieComp({
  viewPoint = 0.5,
  loop = true,
  animationData,
  s3 = false,
  ...props
}) {
  const lottieContainerRef = useRef(null);
  const lottieRef = useRef(null);

  const [json, setJson] = useState({ v: "5.7.6", layers: [] });

  useEffect(() => {
    if (!s3) return;
    async function load() {
      try {
        const res = await fetch(animationData);
        const data = await res.json();
        setJson(data);
      } catch (e) {
        console.error("Lottie JSON load error:", e);
      }
    }
    load();
  }, [animationData]);

  // 🔥 Play when element enters view
  useEffect(() => {
    if (loop) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.stop();
          lottieRef.current?.play();
        }
      },
      { threshold: viewPoint },
    );

    if (lottieContainerRef.current)
      observer.observe(lottieContainerRef.current);

    return () => {
      if (lottieContainerRef.current)
        observer.unobserve(lottieContainerRef.current);
    };
  }, [viewPoint, loop]);

  return (
    <div ref={lottieContainerRef} className="h-max w-max">
      <Lottie
        lottieRef={lottieRef}
        autoplay={loop}
        loop={loop}
        animationData={s3 ? json : animationData}
        {...props}
      />
    </div>
  );
}
