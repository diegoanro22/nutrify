"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Carga Spline solo en cliente
const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => m.default),
  { ssr: false }
);

type Props = {
  splineScene: string; // p.ej. "/spline/scene.splinecode"
  poster?: string; // p.ej. "/images/spline-poster.jpg"
  videoMp4?: string; // p.ej. "/video/hero.mp4"
  height?: number | string; // alto del contenedor
  className?: string;
  unmountWhenHidden?: boolean; // libera GPU cuando no está visible
};

export default function SplineOrVideo({
  splineScene,
  poster = "/images/spline-poster.jpg",
  videoMp4 = "/video/hero.mp4",
  height = "72vh",
  className,
  unmountWhenHidden = true,
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [userEnabled3D, setUserEnabled3D] = useState(false);

  // Heurísticas de performance
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  interface NetworkInformationLike {
    effectiveType?: string;
  }

  const poorNetwork = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    // 2g/slow-2g/3g = limitar canvas
    const nav = navigator as Navigator & { connection?: NetworkInformationLike };
    const et = nav.connection?.effectiveType as string | undefined;
    return et ? /(slow-2g|2g|3g)/i.test(et) : false;
  }, []);

  // Lazy-mount por viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        setInView(entries.some((e) => e.isIntersecting));
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desmontar cuando la pestaña esté oculta
  useEffect(() => {
    if (!unmountWhenHidden) return;
    const onVis = () => setInView(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [unmountWhenHidden]);

  // Regla: video si mobile o reduce-motion o red pobre; Spline solo si desktop y usuario lo permite
  const shouldShowVideo = isMobile || prefersReducedMotion || poorNetwork;

  // Render condicional
  return (
    <div ref={rootRef} className={className} style={{ height }}>
      {!inView ? (
        // Placeholder fuera de viewport
        <Image
          src={poster}
          alt="Vista previa"
          className="h-full w-full object-cover rounded-xl"
          loading="lazy"
          width={1920}
          height={1080}
        />
      ) : shouldShowVideo ? (
        // VIDEO en mobile / reduce-motion / mala red
        <div className="relative h-full w-full rounded-xl overflow-hidden bg-black/10">
          <video
            className="h-full w-full object-cover"
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            poster={poster}
          >
            {/* WebM primero; MP4 fallback */}
            <source src={videoMp4} type="video/mp4" />
          </video>
          {/* Si quieres controles:
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Demo</div>
          */}
        </div>
      ) : (
        // SPLINE en desktop/condiciones buenas
        <div className="relative h-full w-full rounded-xl overflow-hidden">
          {!userEnabled3D && (
            <>
              <Image
                src={poster}
                alt="Vista previa 3D"
                className="h-full w-full object-cover"
                width={1920}
                height={1080}
              />
              <button
                onClick={() => setUserEnabled3D(true)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 text-white text-sm backdrop-blur hover:bg-black/80"
              >
                Activar modelo 3D
              </button>
            </>
          )}
          {userEnabled3D && (
            <Spline
              scene={splineScene}
              renderOnDemand={true}
              className="h-full w-full"
            />
          )}
        </div>
      )}
    </div>
  );
}
