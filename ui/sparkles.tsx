"use client";
import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Component renders particles via tsparticles
export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className = "",
  particleColor = "#FFFFFF",
}: SparklesCoreProps) {
  // engine initialization state
  const [engineLoaded, setEngineLoaded] = useState(false);

  // initialize tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setEngineLoaded(true);
    });
  }, []);

  // particle options memoized
  const options = useMemo(() => {
    return {
      fullScreen: false,
      background: { color: background },
      particles: {
        number: { value: particleDensity, density: { enable: false } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: { min: minSize, max: maxSize } },
        move: { enable: true, speed: 1, outModes: "out" },
      },
    };
  }, [background, particleDensity, particleColor, minSize, maxSize]) as any;

  // render particles: apply className to Particles container
  if (!engineLoaded) return null;
  return <Particles options={options} className={className} />;
}

export interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}
