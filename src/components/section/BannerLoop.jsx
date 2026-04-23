import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

const DEFAULT_ITEMS = [
  "/images/banner-imgs/cambridge.png",
  "/images/banner-imgs/aqa.png",
  "/images/banner-imgs/act.png",
  "/images/banner-imgs/pearson.png",
  "/images/banner-imgs/acara.png",
  "/images/banner-imgs/nzqa.png",
  "/images/banner-imgs/qsta.png",
  "/images/banner-imgs/ap-student.png",
];

function BannerLoop({
  items = DEFAULT_ITEMS,
  bg = "#ffffff",
  speedSeconds = 18,
  className = "h-23 flex justify-center items-center",
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
        <motion.div className="flex w-max items-center whitespace-nowrap border" style={{ x }}>
          {Array.from({ length: copyCount }).map((_, copyIdx) => (
            <div
              key={copyIdx}
              ref={copyIdx === 0 ? firstCopyRef : undefined}
              className="flex items-center"
              aria-hidden={copyIdx !== 0}
            >
              {safeItems.map((item, idx) => {
                const isImage = typeof item === "string" && /\.(png|jpe?g|svg|avif|webp)$/i.test(item);
                return (
                  <div
                    key={`${copyIdx}-${item}-${idx}`}
                    className="flex items-center py-2 sm:py-3 md:py-4"
                  >
                    {isImage ? (
                      <>
                        <img
                          src={item}
                          alt="trusted partner"
                          aria-hidden="false"
                          className="h-6 w-auto px-3 sm:h-8 sm:px-6 md:h-10 md:px-8 object-contain"
                          loading="lazy"
                          draggable="false"
                        />

                        {/* star separator (visible between logos) */}
                        <img
                          src="/images/star1.svg"
                          alt="separator"
                          aria-hidden="true"
                          className="h-4 w-4 opacity-90 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-1 sm:mx-2"
                          loading="lazy"
                          draggable="false"
                        />
                      </>
                    ) : (
                      <>
                        <span className="px-3 sm:px-6 md:px-7 text-[11px] sm:text-xs md:text-[22px] font-semibold tracking-[0.18em] text-white/90 uppercase">
                          {item}
                        </span>
                        <img
                          src="/images/star1.svg"
                          alt="separator"
                          aria-hidden="true"
                          className="h-4 w-4 opacity-90 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-1 sm:mx-2"
                          loading="lazy"
                          draggable="false"
                        />
                      </>
                    )}
                  </div>
                );
              })}
             </div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 }
 
 export default BannerLoop;
