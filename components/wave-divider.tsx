import { cn } from "@/lib/utils";

export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full overflow-hidden leading-none", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-8 w-full sm:h-14"
      >
        <path
          fill="currentColor"
          d="M0,20 C240,50 480,0 720,20 C960,40 1200,0 1440,20 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}
