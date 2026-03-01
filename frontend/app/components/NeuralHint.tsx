"use client";

export default function NeuralHint() {
  return (
    <svg
      className="absolute left-[8%] bottom-[15%] opacity-[0.12]"
      width="180"
      height="140"
    >
      {/* Input */}
      <circle cx="20" cy="30" r="8" fill="#f87171" />
      <circle cx="20" cy="70" r="8" fill="#f87171" />
      <circle cx="20" cy="110" r="8" fill="#f87171" />

      {/* Hidden */}
      <circle cx="90" cy="50" r="8" fill="#eab308" />
      <circle cx="90" cy="90" r="8" fill="#eab308" />

      {/* Output */}
      <circle cx="150" cy="70" r="8" fill="#38bdf8" />

      {/* Connections */}
      <line x1="20" y1="30" x2="90" y2="50" stroke="#f87171" strokeWidth="1" />
      <line x1="20" y1="70" x2="90" y2="50" stroke="#f87171" strokeWidth="1" />
      <line x1="20" y1="110" x2="90" y2="90" stroke="#f87171" strokeWidth="1" />
      <line x1="90" y1="50" x2="150" y2="70" stroke="#eab308" strokeWidth="1" />
      <line x1="90" y1="90" x2="150" y2="70" stroke="#eab308" strokeWidth="1" />
    </svg>
  );
}