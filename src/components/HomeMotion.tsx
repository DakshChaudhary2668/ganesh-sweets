"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HomeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    let started = false;
    const context = gsap.context(() => {});
    const enter = () => {
      if (started) return;
      started = true;
      context.add(() => {
        gsap.fromTo("[data-hero-enter]", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .85, stagger: .09, ease: "power3.out", clearProps: "transform,opacity" });
        gsap.fromTo("[data-hero-photo] img", { scale: 1.065 }, { scale: 1, duration: 1.6, ease: "power3.out", clearProps: "transform" });
      });
    };
    if (document.documentElement.dataset.intro === "skip") enter();
    window.addEventListener("ganesh:intro-complete", enter);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        context.add(() => gsap.fromTo(entry.target, { y: 24, opacity: .25 }, { y: 0, opacity: 1, duration: .85, ease: "power3.out", clearProps: "transform,opacity" }));
        observer.unobserve(entry.target);
      }
    }, { threshold: .12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); context.revert(); window.removeEventListener("ganesh:intro-complete", enter); };
  }, []);
  return null;
}
