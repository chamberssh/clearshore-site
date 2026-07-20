import { cn } from "@/lib/utils";

/**
 * Stylised illustrated portrait of Shelley — a warm placeholder until a real
 * photo is available. Sun glow and wave line echo the Clearshore logo.
 */
export function ShelleyAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Illustrated portrait of Shelley Bentley"
      className={cn("rounded-full", className)}
    >
      <defs>
        <radialGradient id="shelley-sun" cx="50%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#E8B54D" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#E8B54D" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E8B54D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shelley-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7A8B" />
          <stop offset="100%" stopColor="#1E6B7B" />
        </linearGradient>
        <clipPath id="shelley-clip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>

      <g clipPath="url(#shelley-clip)">
        <rect width="200" height="200" fill="url(#shelley-bg)" />
        <circle cx="100" cy="64" r="70" fill="url(#shelley-sun)" />

        {/* hair */}
        <path
          d="M100 42 C70 42 56 66 56 92 C56 118 62 136 58 152 L82 148 C76 128 74 108 78 94 C82 78 90 70 100 70 C110 70 118 78 122 94 C126 108 124 128 118 148 L142 152 C138 136 144 118 144 92 C144 66 130 42 100 42 Z"
          fill="#1A2E35"
          opacity="0.92"
        />
        {/* face */}
        <ellipse cx="100" cy="92" rx="24" ry="27" fill="#F2D8B8" />
        {/* neck */}
        <rect x="91" y="112" width="18" height="16" rx="7" fill="#EACFA9" />
        {/* shoulders / top */}
        <path
          d="M42 200 C46 158 70 138 100 138 C130 138 154 158 158 200 Z"
          fill="#7FB3C4"
        />
        <path
          d="M84 138 C90 148 110 148 116 138 C110 142 90 142 84 138 Z"
          fill="#6AA3B5"
        />
        {/* gentle smile + closed, calm eyes */}
        <path
          d="M88 88 q4 3 8 0"
          stroke="#1A2E35"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          transform="translate(-6 0)"
        />
        <path
          d="M104 88 q4 3 8 0"
          stroke="#1A2E35"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          transform="translate(6 0)"
        />
        <path
          d="M92 104 q8 6 16 0"
          stroke="#C98A6B"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* wave line, echoing the logo */}
        <path
          d="M-10 176 C20 168 45 184 75 176 C105 168 130 184 160 176 C180 171 195 174 210 171"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
