"use client";

import React, { useRef, useEffect } from "react";

interface GradualBlurBottomProps {
  height?: string; // e.g. "6rem", "20vh"
  speed?: number; // how fast the shimmer moves
}

const GradualBlurBottom: React.FC<GradualBlurBottomProps> = ({
  height = "15vh",
  speed = 0.3,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<number>(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (overlayRef.current) {
        offsetRef.current += speed;
        overlayRef.current.style.background = `linear-gradient(to top, #071021, rgba(7,16,33,0) ${
          50 + Math.sin(offsetRef.current / 50) * 10
        }%)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed]);

  return (
    <div
      ref={overlayRef}
      style={{
        height,
        bottom: 0,
        left: 0,
        right: 0,
        position: "fixed",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default GradualBlurBottom;
