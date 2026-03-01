"use client";

export default function CNNHint() {
  return (
    <svg
      className="absolute right-[10%] top-[25%] opacity-[0.12]"
      width="160"
      height="160"
    >
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 25}
            y={row * 25}
            width="22"
            height="22"
            fill="#38bdf8"
          />
        ))
      )}

      <rect
        x="25"
        y="25"
        width="50"
        height="50"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
    </svg>
  );
}