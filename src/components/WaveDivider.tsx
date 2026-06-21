interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

export default function WaveDivider({
  fromColor = "#ffffff",
  toColor = "#f5f3ff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flip ? "scaleY(-1)" : undefined, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
        style={{ display: "block" }}
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={toColor}
        />
        <rect x="0" y="0" width="1440" height="30" fill={fromColor} />
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30"
          fill="none"
          stroke={toColor}
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}
