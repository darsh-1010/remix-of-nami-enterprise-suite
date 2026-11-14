"use client";

import { WORLD_DOTS } from "@/lib/worldDots";

export interface MapMarker {
  name: string;
  pin: [number, number]; // position on the 1400x700 map canvas
  side: "left" | "right";
  labelY: number; // y of the label / horizontal leader line
}

const STEP = 1000 / WORLD_DOTS[0].length;
const OX = 200;
const OY = 110;

// One <path> of zero-length round-capped segments = one dot per land cell.
const LAND = WORLD_DOTS.map((row, r) =>
  [...row]
    .map((v, c) =>
      v === "1"
        ? `M${(OX + (c + 0.5) * STEP).toFixed(1)} ${(OY + (r + 0.5) * STEP).toFixed(1)}h0`
        : "",
    )
    .join(""),
).join("");

/** Dot-matrix world map with labelled leader lines to each office. `focus` is a marker index. */
export function WorldMap({
  markers,
  focus = null,
  onFocus,
  className = "",
}: {
  markers: MapMarker[];
  focus?: number | null;
  onFocus?: (i: number | null) => void;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1400 700"
      role="img"
      aria-label="World map showing NAMI Group's global presence"
      className={className}
    >
      <path
        d={LAND}
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        className="text-foreground/25"
      />
      {markers.map((m, i) => {
        const active = focus === i;
        const dim = focus !== null && !active;
        const lx = m.side === "left" ? 260 : 1140; // where the leader line leaves the label
        const tx = m.side === "left" ? 40 : 1360;
        return (
          <g
            key={m.name}
            onMouseEnter={() => onFocus?.(i)}
            onMouseLeave={() => onFocus?.(null)}
            style={{ opacity: dim ? 0.35 : 1, transition: "opacity .3s" }}
          >
            <path
              d={`M${lx} ${m.labelY}H${m.pin[0]}V${m.pin[1]}`}
              fill="none"
              strokeWidth={active ? 2 : 1.25}
              strokeDasharray="6 5"
              className="stroke-gold"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="22"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <circle cx={m.pin[0]} cy={m.pin[1]} r={6} className="fill-gold" />
            <circle
              cx={m.pin[0]}
              cy={m.pin[1]}
              r={6}
              fill="none"
              strokeWidth={1.5}
              className="stroke-gold"
            >
              <animate attributeName="r" from="6" to="22" dur="2.4s" repeatCount="indefinite" />
              <animate
                attributeName="opacity"
                from="0.9"
                to="0"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={tx}
              y={m.labelY + 8}
              textAnchor={m.side === "left" ? "start" : "end"}
              className="fill-foreground font-display"
              fontSize={24}
            >
              {m.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
