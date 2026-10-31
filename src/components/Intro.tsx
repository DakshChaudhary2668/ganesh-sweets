"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Intro.module.scss";

const RibbonShader = dynamic(() => import("./RibbonShader"), { ssr: false });

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [shader, setShader] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const finish = useRef<() => void>(() => {});

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("ganesh-intro-v2") === "1"; } catch { seen = true; }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.dataset.intro = "skip";
      setVisible(false);
      window.dispatchEvent(new Event("ganesh:intro-complete"));
      return;
    }
    if (!root.current) return;
    setShader(true);
    const overlay = root.current;
    const elements = document.querySelectorAll<HTMLElement>("header, main, footer");
    elements.forEach((element) => { element.inert = true; });
    button.current?.focus({ preventScroll: true });
    let finished = false;
    const timeline = gsap.timeline();
    const done = () => {
      if (finished) return;
      finished = true;
      timeline.kill();
      try { sessionStorage.setItem("ganesh-intro-v2", "1"); } catch { /* storage may be disabled */ }
      document.documentElement.dataset.intro = "skip";
      elements.forEach((element) => { element.inert = false; });
      if (overlay.contains(document.activeElement)) document.querySelector<HTMLElement>("main h1")?.focus({ preventScroll: true });
      setShader(false);
      setVisible(false);
      window.dispatchEvent(new Event("ganesh:intro-complete"));
    };
    finish.current = done;
    timeline.fromTo(overlay.querySelector(`.${styles.logo}`), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .4 })
      .fromTo(overlay.querySelector(`.${styles.ribbonStage}`), { scaleX: .94, opacity: 0 }, { scaleX: 1, opacity: 1, duration: .45, ease: "power2.out" }, .12)
      .to(overlay.querySelector(`.${styles.bow}`), { rotation: -5, scaleX: 1.08, y: -5, duration: .35, ease: "power2.inOut" }, .55)
      .to(overlay.querySelector(`.${styles.bow}`), { scale: .8, rotation: -14, y: -32, opacity: 0, duration: .4, ease: "power2.in" }, .9)
      .to(overlay.querySelector(`.${styles.ribbonLeft}`), { xPercent: -110, rotation: -4, duration: .8, ease: "power3.inOut" }, 1.05)
      .to(overlay.querySelector(`.${styles.ribbonRight}`), { xPercent: 110, rotation: 4, duration: .8, ease: "power3.inOut" }, 1.05)
      .to(overlay.querySelector(`.${styles.logo}`), { y: -12, opacity: 0, duration: .35 }, 1.25)
      .to(overlay.querySelector(`.${styles.panelLeft}`), { xPercent: -101, duration: .85, ease: "power3.inOut" }, 1.35)
      .to(overlay.querySelector(`.${styles.panelRight}`), { xPercent: 101, duration: .85, ease: "power3.inOut" }, 1.35)
      .to(overlay.querySelector(`.${styles.caption}`), { opacity: 0, duration: .2 }, 1.35)
      .to(overlay, { opacity: 0, duration: .2, onComplete: done }, 2);
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") done();
      if (event.key === "Tab") { event.preventDefault(); button.current?.focus({ preventScroll: true }); }
    };
    window.addEventListener("keydown", onEscape);
    return () => { timeline.kill(); elements.forEach((element) => { element.inert = false; }); window.removeEventListener("keydown", onEscape); };
  }, []);

  if (!visible) return null;
  return <div ref={root} className={styles.intro} role="dialog" aria-modal="true" aria-label="Ganesh Sweets introduction">
    <div className={`${styles.panel} ${styles.panelLeft}`} /><div className={`${styles.panel} ${styles.panelRight}`} />
    <div className={styles.logo}><Image src="/brand/ganesh-sweets-logo.png" alt="" width={130} height={130} loading="eager" /><span>Ganesh Sweets</span><small>VIJAYAWADA · SINCE 1995</small></div>
    <div className={styles.ribbonStage} aria-hidden="true">
      <div className={`${styles.ribbon} ${styles.ribbonLeft}`} /><div className={`${styles.ribbon} ${styles.ribbonRight}`} />
      <div className={styles.bow}><div className={styles.satin}>{shader && <RibbonShader />}</div><svg className={styles.folds} viewBox="0 0 320 220" fill="none"><path d="M150 100C111 59 63 39 39 54M145 105C104 106 68 91 46 75M175 101C213 59 260 39 284 54M179 106C220 106 255 91 278 75M150 118C138 151 129 179 117 195M180 116C199 140 212 166 229 194" stroke="#E8DCC8" strokeOpacity=".27" strokeWidth="1.2" /></svg><span className={styles.knot} /></div>
    </div>
    <p className={styles.caption}>A little sweetness awaits.</p>
    <button ref={button} type="button" className={styles.skip} onClick={() => finish.current()}>Skip intro <span aria-hidden="true">→</span></button>
  </div>;
}
