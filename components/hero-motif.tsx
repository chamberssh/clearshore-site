export function HeroMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      <circle cx="640" cy="100" r="80" fill="#E8B54D" opacity="0.16" />
      <path
        d="M-40,250 C100,200 220,300 340,250 C460,200 580,300 700,250 C760,225 800,232 840,225"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        opacity="0.14"
      />
      <path
        d="M-40,300 C100,265 220,335 340,300 C460,265 580,335 700,300 C760,283 800,288 840,283"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        opacity="0.1"
      />
      <path
        d="M-40,340 C100,315 220,365 340,340 C460,315 580,365 700,340 C760,328 800,331 840,328"
        fill="none"
        stroke="#7FB3C4"
        strokeWidth="2"
        opacity="0.16"
      />
    </svg>
  );
}
