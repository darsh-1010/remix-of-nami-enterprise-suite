"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export interface GlobeMarker {
  name: string;
  location: [number, number]; // [lat, lng]
}

// Same mapping cobe's own demos use to turn a lat/lng into the phi/theta that faces it.
const toAngles = ([lat, lng]: [number, number]): [number, number] => [
  Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

const GOLD: [number, number, number] = [0.87, 0.73, 0.45];

/**
 * Interactive WebGL globe (cobe, ~5KB). Auto-rotates, can be dragged, draws gold arcs from
 * the first marker (the hub) to the others, and turns to face `focus` (a marker index).
 */
export function Globe({
  markers,
  focus = null,
  className = "",
}: {
  markers: GlobeMarker[];
  focus?: number | null;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const focusRef = useRef<number | null>(focus);
  focusRef.current = focus;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = canvas.offsetWidth;
    let phi = toAngles(markers[0].location)[0];
    let theta = 0.3;
    let dragging = false;
    let lastX = 0;
    let raf = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size,
      height: size,
      phi,
      theta,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.08, 0.11, 0.2],
      markerColor: GOLD,
      glowColor: [0.3, 0.24, 0.12],
      markers: markers.map((m) => ({ location: m.location, size: 0.07 })),
      arcs: markers.slice(1).map((m) => ({ from: markers[0].location, to: m.location })),
      arcColor: GOLD,
      arcWidth: 0.6,
      arcHeight: 0.25,
    });

    const tick = () => {
      const f = focusRef.current;
      if (f !== null && !dragging) {
        const [tp, tt] = toAngles(markers[f].location);
        // shortest way round for phi
        let d = (tp - phi) % (Math.PI * 2);
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        phi += d * 0.08;
        theta += (tt - theta) * 0.08;
      } else if (!dragging && !reduced) {
        phi += 0.004;
        theta += (0.3 - theta) * 0.02;
      }
      globe.update({ phi, theta });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      phi += (e.clientX - lastX) * 0.006;
      lastX = e.clientX;
    };
    const onUp = () => {
      dragging = false;
      canvas.style.cursor = "grab";
    };
    const onResize = () => {
      size = canvas.offsetWidth;
      globe.update({ width: size, height: size });
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [markers]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Interactive globe showing NAMI Group's global presence"
      className={className}
      style={{ width: "100%", aspectRatio: "1 / 1", cursor: "grab", touchAction: "pan-y" }}
    />
  );
}
