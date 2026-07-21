"use client";
// add class "count-up" to block where the count should be trigger on visibility
import { useEffect, useState, useRef } from "react";

const CountUp = ({ value = "0", delay = 1.5 }) => {
  const [display, setDisplay] = useState(value);
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);
  const startTimestamp = useRef(null);

  // Extract prefix, numeric, and suffix safely
  const strValue = String(value).trim();
  const match = strValue.match(/([^0-9.,]*)([0-9.,]+)([^0-9.,]*)/);
  const prefix = match?.[1] || "";
  const numeric = parseFloat(match?.[2]?.replace(/,/g, "")) || 0;
  const suffix = match?.[3] || "";
  const decimals = match?.[2]?.split(".")[1]?.length || 0;

  // Intersection Observer to detect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.3 }, // 30% visible
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation logic
  useEffect(() => {
    if (!inView || !match) return;

    let raf;
    const animate = (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp.current) / (delay * 1000),
        1,
      );
      const currentValue = numeric * progress;

      setDisplay(`${prefix}${currentValue.toFixed(decimals)}${suffix}`);

      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay]);

  return (
    <span ref={elementRef} className="inline-block">
      {display}
    </span>
  );
};

export default CountUp;