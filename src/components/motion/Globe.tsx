const SIZE = 360;
const MERIDIANS = [0, 30, 60, 90, 120, 150];
const LATITUDES = [-60, -30, 0, 30, 60];

// Pure-CSS 3D wireframe globe (no dependencies). Spin keyframes live in globals.css.
export function Globe({ className = "" }: { className?: string }) {
  const ring = "absolute rounded-full border border-gold/40";
  return (
    <div aria-hidden className={className} style={{ width: SIZE, height: SIZE, perspective: 1100 }}>
      <div className="globe-spin relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
        {MERIDIANS.map((deg) => (
          <span
            key={deg}
            className={`${ring} inset-0`}
            style={{ transform: `rotateY(${deg}deg)` }}
          />
        ))}
        {LATITUDES.map((lat) => {
          const r = Math.cos((lat * Math.PI) / 180);
          const d = SIZE * r;
          return (
            <span
              key={lat}
              className={ring}
              style={{
                width: d,
                height: d,
                left: (SIZE - d) / 2,
                top: (SIZE - d) / 2,
                transform: `translateY(${(-SIZE / 2) * Math.sin((lat * Math.PI) / 180)}px) rotateX(90deg)`,
              }}
            />
          );
        })}
        <span
          className="absolute inset-[18%] rounded-full bg-gold/10 blur-2xl"
          style={{ transform: "translateZ(0)" }}
        />
      </div>
    </div>
  );
}
