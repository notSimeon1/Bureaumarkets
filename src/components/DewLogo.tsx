import React from "react";

interface BureauLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  tagline?: boolean;
  className?: string;
  iconOnly?: boolean;
}

const SIZES = {
  xs: { icon: 20, text: "text-xs", sub: "text-[8px]" },
  sm: { icon: 28, text: "text-sm", sub: "text-[9px]" },
  md: { icon: 36, text: "text-base", sub: "text-[10px]" },
  lg: { icon: 44, text: "text-lg", sub: "text-[11px]" },
  xl: { icon: 56, text: "text-2xl", sub: "text-xs" },
};

/**
 * BureauLogo: Sharp, official, institutional prime brokerage insignia.
 * Features a geometric capital 'B' with an integrated 'M' embedded within its counter.
 */
export function DewLogo({
  size = "md",
  showText = true,
  tagline = false,
  className = "",
  iconOnly = false,
}: BureauLogoProps) {
  const { icon, text, sub } = SIZES[size] || SIZES.md;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Insignia: Geometric B with embedded M in Blackish Gray & Lilac/Purple */}
      <div
        style={{ width: icon, height: icon }}
        className="relative flex-shrink-0 flex items-center justify-center rounded-[6px] bg-gradient-to-br from-[#1A1C26] via-[#12131A] to-[#0A0B0E] p-[1.5px] border border-[#2A2D3D] shadow-[0_2px_12px_rgba(0,0,0,0.8)] group-hover:border-[#A855F7]/70 transition-colors"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
          aria-label="Bureaumarkets Insignia"
        >
          <defs>
            <linearGradient
              id="bureauBGrad"
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient
              id="bureauMGrad"
              x1="30"
              y1="20"
              x2="70"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
            <filter id="bureauGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="1.5"
                floodColor="#000000"
                floodOpacity="0.8"
              />
            </filter>
          </defs>

          {/* Precision outer geometric B frame */}
          <path
            d="M 20 16 H 52 C 68 16 78 26 78 40 C 78 50 70 57 58 59 C 72 61 80 70 80 83 C 80 94 68 96 50 96 H 20 Z M 32 27 V 49 H 50 C 59 49 65 44 65 38 C 65 32 59 27 50 27 Z M 32 60 V 85 H 52 C 62 85 67 79 67 72 C 67 65 62 60 52 60 Z"
            fill="url(#bureauBGrad)"
            fillRule="evenodd"
            filter="url(#bureauGlow)"
          />

          {/* Embedded M accent */}
          <path
            d="M 38 42 L 50 55 L 62 42 V 65 H 57 V 52 L 50 60 L 43 52 V 65 H 38 Z"
            fill="url(#bureauMGrad)"
            filter="url(#bureauGlow)"
            opacity="0.9"
          />

          {/* Institutional lilac corner accent */}
          <rect x="20" y="18" width="4" height="4" fill="#A855F7" opacity="0.95" />
        </svg>
      </div>

      {/* Typography */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight text-white uppercase font-display ${text}`}
              style={{ letterSpacing: "-0.01em" }}
            >
              Bureau <span className="text-[#A855F7]">Markets</span>
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[8px] font-bold tracking-wider uppercase text-purple-300 bg-purple-950/70 border border-purple-500/40 rounded-[3px]">
              Prime
            </span>
          </div>
          {tagline && (
            <span
              className={`text-muted-foreground uppercase font-medium tracking-widest mt-0.5 ${sub}`}
            >
              Institutional Brokerage
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export const BureauLogo = DewLogo;
export default DewLogo;
