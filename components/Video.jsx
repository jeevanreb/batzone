"use client";
import { useEffect, useRef } from "react";

export default function Video({
  src, // video src | should start with "/"
  loop = true, // OPTIONAL: video loop | default true
  className, // OPTIONAL: classes
  style, // OPTIONAL: plain css style
  width = "", // OPTIONAL: width of video
  height = "", // OPTIONAL: height of video
  id = "", // OPTIONAL: id
  viewPoint = 0.5, // OPTIONAL: 0-1 | show how much percent should visible to play video
  s3=false,
}) {
  const videoRef = useRef();

  useEffect(() => {
    if (loop) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        }
      },
      {
        threshold: viewPoint,
      },
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [videoRef]);

  return (
    <>
      <video
        ref={videoRef}
        src={s3 ? src : `${src}`}
        id={id}
        className={className}
        style={style}
        playsInline
        loop={loop}
        autoPlay
        muted
        width={width}
        height={height}
      />
    </>
  );
}
