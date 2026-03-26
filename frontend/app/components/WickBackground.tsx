"use client";

import AnimatedCurves from "./AnimatedCurves";
import CNNLab from "./CNNLab";
import ANNLab from "./ANNLab";
import MathLayer from "./MathLayer";

export default function WickBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">

      {/* Professional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent" />

      {/* Enhanced Soft Glow */}
      <div className="absolute top-[30%] left-[40%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-900/40 to-blue-900/30 blur-[180px]" />
      <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/20 blur-[140px]" />

      {/* Mathematical Curves */}
      <AnimatedCurves />

      {/* CNN Research Visualization */}
      <CNNLab />

      {/* ANN Neural Activation */}
      <ANNLab />

      {/* Floating Math Context */}
      <MathLayer />

      {/* Professional Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

    </div>
  );
}