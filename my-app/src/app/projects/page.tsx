"use client";

import { motion } from "framer-motion";
import Squares from "@/components/animations/squares-bg";
import SplashCursor from "@/components/animations/splash-cursor";
import GradualBlurMemo from "@/components/animations/gradual-blur";

export default function Home() {
  return (
    <section
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
    >
      <div style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          {/* Soft animated squares */}
          <Squares
            speed={0.2} // slower for smooth movement
            squareSize={40} // smaller squares
            direction="diagonal"
            borderColor="rgba(255,255,255,0.1)" // subtle border
            hoverFillColor="rgba(247,164,8,0.1)" // very light hover accent
          />

          {/* Main content */}
          <motion.main
            className="relative z-10 text-center px-4 max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p>Test</p>
          </motion.main>
        </div>
      </div>
      {/* Custom cursor */}
      <SplashCursor />
      <GradualBlurMemo
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
