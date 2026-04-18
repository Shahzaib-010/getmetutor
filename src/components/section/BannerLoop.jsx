import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

const DEFAULT_ITEMS = [
  "MOTION GRAPHIC",
  "ART DIRECTION",
  "DESIGN",
  "BRANDING",
  "DEVELOPMENT",
  "STRATEGY",
  "PRODUCT DESIGN",
];

function BannerLoop({
  items = DEFAULT_ITEMS,
  bg = "#000000",
  iconSrc = "/images/star1.svg",
  speedSeconds = 18,
  className = "h-20 flex justify-center items-center",
}) {
  const shouldReduceMotion = useReducedMotion();
  const viewportRef = useRef(null);
  const firstCopyRef = useRef(null);
  const x = useMotionValue(0);

  const safeItems = useMemo(
    () => (Array.isArray(items) && items.length ? items : DEFAULT_ITEMS),
    [items]
  );

  const [copyCount, setCopyCount] = useState(2);
  const [copyWidth, setCopyWidth] = useState(0);

  // Measure one "copy" width and ensure enough copies to fill the viewport (no gaps),
  // even when items are few.
  useLayoutEffect(() => {
    const viewportEl = viewportRef.current;
    const firstEl = firstCopyRef.current;
    if (!viewportEl || !firstEl) return;

    const measure = () => {
      const w = firstEl.getBoundingClientRect().width;
      const vw = viewportEl.getBoundingClientRect().width;
      if (!w || !vw) return;

      setCopyWidth(w);
      // Need at least 2 copies for seamless wrap.
      const needed = Math.max(2, Math.ceil(vw / w) + 1);
      setCopyCount(needed);
      // Reset to avoid wrap artifacts after resize.
      x.set(0);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewportEl);
    ro.observe(firstEl);
    return () => ro.disconnect();
  }, [safeItems, x]);

  // Pixel-based, wrapped translation for a truly continuous loop (no jump).
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;
    if (!copyWidth) return;

    // px / second
    const speed = copyWidth / Math.max(6, speedSeconds);
    const next = x.get() - (delta / 1000) * speed;
    x.set(next <= -copyWidth ? next + copyWidth : next);
  });

  return (
    <section
      className={`w-full overflow-hidden ${className}`}
      style={{ backgroundColor: bg }}
      aria-label="Scrolling banner"
    >
      <div ref={viewportRef} className="relative w-full">
        <motion.div className="flex w-max items-center whitespace-nowrap" style={{ x }}>
          {Array.from({ length: copyCount }).map((_, copyIdx) => (
            <div
              key={copyIdx}
              ref={copyIdx === 0 ? firstCopyRef : undefined}
              className="flex items-center"
              aria-hidden={copyIdx !== 0}
            >
              {safeItems.map((label, idx) => (
                <div
                  key={`${copyIdx}-${label}-${idx}`}
                  className="flex items-center py-3 sm:py-3.5 md:py-4"
                >
                  <span className="px-5 sm:px-6 md:px-7 text-[11px] sm:text-xs md:text-[18px] font-semibold tracking-[0.18em] text-white/90 uppercase">
                    {label}
                  </span>
                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[22px] md:w-[22px] opacity-95"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BannerLoop;
