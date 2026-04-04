"use client";

import { useEffect, useRef } from "react";

export default function EasterEggs() {
  const counts = useRef<Record<string, number>>({});

  useEffect(() => {
    console.log(
      "%c🍌 you found a banana! less is more",
      "font-size: 14px; font-weight: bold; color: #f5c842;",
    );
  }, []);

  const spawnBanana = (x: number, y: number) => {
    const el = document.createElement("span");
    el.textContent = "🍌";
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 2rem;
      pointer-events: none;
      z-index: 9999;
      animation: bananaFloat 1.2s ease-out forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  };

  const spawnBurst = (rect: DOMRect, count: number, delay = 130) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        spawnBanana(
          rect.left + Math.random() * rect.width,
          rect.top + Math.random() * 20,
        );
      }, i * delay);
    }
  };

  const onCount = (key: string, threshold: number, onTrigger: () => void) => {
    counts.current[key] = (counts.current[key] ?? 0) + 1;
    if (counts.current[key] >= threshold) {
      counts.current[key] = 0;
      onTrigger();
    }
  };

  const attachCounter = (
    el: Element,
    key: string,
    threshold: number,
    getBurst: (e: Event) => { rect: DOMRect; count: number; delay?: number },
    preventDefault = false,
  ) => {
    el.addEventListener("click", (e) => {
      if (preventDefault) e.preventDefault();
      onCount(key, threshold, () => {
        const { rect, count, delay } = getBurst(e);
        spawnBurst(rect, count, delay);
      });
    });
  };

  const injectStyles = () => {
    if (document.getElementById("banana-styles")) return;
    const style = document.createElement("style");
    style.id = "banana-styles";
    style.textContent = `
      @keyframes bananaFloat {
        0%   { opacity: 1; transform: translateY(0) scale(1) rotate(-10deg); }
        100% { opacity: 0; transform: translateY(-80px) scale(1.4) rotate(20deg); }
      }
    `;
    document.head.appendChild(style);
  };

  useEffect(() => {
    injectStyles();

    // Logo
    const logo = document.querySelector(".site-nav__logo");
    if (logo) {
      attachCounter(
        logo,
        "logo",
        3,
        () => ({
          rect: (logo as HTMLElement).getBoundingClientRect(),
          count: 5,
          delay: 120,
        }),
        true,
      );
    }

    // Footer
    const footer = document.querySelector(".footer__copy");
    if (footer) {
      attachCounter(footer, "footer", 3, () => ({
        rect: (footer as HTMLElement).getBoundingClientRect(),
        count: 3,
        delay: 150,
      }));
    }

    // Service cards — 1 click triggers immediately
    document.querySelectorAll(".service__card").forEach((card, i) => {
      attachCounter(card, `card-${i}`, 1, (e) => ({
        rect: (e.target as HTMLElement)
          .closest(".service__card")!
          .getBoundingClientRect(),
        count: 1,
      }));
    });

    // Section titles
    document.querySelectorAll(".section-title").forEach((title, i) => {
      attachCounter(title, `title-${i}`, 5, () => ({
        rect: (title as HTMLElement).getBoundingClientRect(),
        count: 4,
        delay: 130,
      }));
    });
  }, []);

  return null;
}
