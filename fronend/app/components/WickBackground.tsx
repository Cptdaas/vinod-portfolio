"use client";

import AnimatedCurves from "./AnimatedCurves";
import CNNLab from "./CNNLab";
import ANNLab from "./ANNLab";
import MathLayer from "./MathLayer";

export default function WickBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Controlled Soft Glow */}
      <div className="absolute top-[30%] left-[40%] w-[520px] h-[520px] rounded-full bg-red-900/30 blur-[160px]" />

      {/* Mathematical Curves */}
      <AnimatedCurves />

      {/* CNN Research Visualization */}
      <CNNLab />

      {/* ANN Neural Activation */}
      <ANNLab />

      {/* Floating Math Context */}
      <MathLayer />

      {/* Subtle Fade Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

    </div>
  );
}