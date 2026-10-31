"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ShaderField = dynamic(() => import("./ShaderField"), { ssr: false });

export default function HeroAura() {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 781px)");
    let inView = false;
    const update = () => setActive(inView && desktop.matches && !reduced.matches && document.documentElement.dataset.intro === "skip");
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); }, { threshold: 0.05 });
    if (host.current) observer.observe(host.current);
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    window.addEventListener("ganesh:intro-complete", update);
    return () => { observer.disconnect(); desktop.removeEventListener("change", update); reduced.removeEventListener("change", update); window.removeEventListener("ganesh:intro-complete", update); };
  }, []);
  return <div ref={host} className="hero-aura" aria-hidden="true">{active ? <ShaderField /> : null}</div>;
}
