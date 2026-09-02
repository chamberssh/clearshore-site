"use client";

import { useEffect } from "react";

// Client-only enhancements for the /assist marketing page: a gentle canvas
// wave in the hero and scroll-triggered reveals. Both respect reduced motion.
export function AssistEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll reveals
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".assist-page [data-reveal]")
    );
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
        io.observe(el);
      });
    }

    // Hero wave
    const canvas = document.getElementById("assist-wave") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    const layers = [
      { amp: 26, len: 0.008, speed: 0.01, y: 0.62, col: "rgba(47,163,155,0.28)" },
      { amp: 20, len: 0.012, speed: 0.014, y: 0.72, col: "rgba(23,99,93,0.32)" },
      { amp: 32, len: 0.006, speed: 0.007, y: 0.82, col: "rgba(230,177,104,0.10)" },
    ];

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      layers.forEach((L) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 6) {
          const y =
            h * L.y +
            Math.sin(x * L.len + t * L.speed) * L.amp +
            Math.sin(x * L.len * 2.3 + t * L.speed * 1.7) * (L.amp * 0.35);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = L.col;
        ctx.fill();
      });
      t += 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return null;
}
