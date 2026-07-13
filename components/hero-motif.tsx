export function HeroMotif({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="absolute -top-16 right-[8%] size-64 rounded-full bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)] opacity-40 blur-2xl sm:size-96" />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M-40,250 C100,200 220,300 340,250 C460,200 580,300 700,250 C760,225 800,232 840,225"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          opacity="0.3"
        />
        <path
          d="M-40,300 C100,265 220,335 340,300 C460,265 580,335 700,300 C760,283 800,288 840,283"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          opacity="0.22"
        />
        <path
          d="M-40,340 C100,315 220,365 340,340 C460,315 580,365 700,340 C760,328 800,331 840,328"
          fill="none"
          stroke="#7FB3C4"
          strokeWidth="2.5"
          opacity="0.32"
        />
      </svg>
    </div>
  );
}
