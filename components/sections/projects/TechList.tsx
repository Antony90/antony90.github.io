"use client"
import { TechName } from "@/constants/tech";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { TechPill } from "./TechPill";

// Animation constants
const SCROLL_SPEED_FACTOR = 100;
const EXTRA_SCROLL_OFFSET = 60;

export default function TechList({ items }: { items: TechName[] }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [overflowAmount, setOverflowAmount] = useState(0);

  // Calculate overflow and animation needs
  const checkOverflow = () => {
    if (contentRef.current) {
      const { clientWidth, scrollWidth } = contentRef.current;
      const needsAnimation = scrollWidth > clientWidth;
      setShouldAnimate(needsAnimation);
      setOverflowAmount(scrollWidth - clientWidth);
    }
  };

  // Handle resize and initial calculation
  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [items]);

  // Configure dynamic scrolling animation based on list length
  const animationConfigCSS = shouldAnimate
    ? ({
        "--scroll-amount": `${-overflowAmount - EXTRA_SCROLL_OFFSET}px`,
        "--scroll-duration": `${(overflowAmount + EXTRA_SCROLL_OFFSET) / SCROLL_SPEED_FACTOR}s`,
      } as CSSProperties)
    : {};

  // This Tailwind utility class only works as intended
  // When inlined. It fails if used in a separate CSS file
  // Due to how Tailwind compiles classes with variables
  const animateGroup =
    "group-hover:animate-[scroll-out_var(--scroll-duration)_linear_forwards,hold-position_1s_linear_var(--scroll-duration)_forwards,scroll-back_var(--scroll-duration)_linear_calc(var(--scroll-duration)_+_1s)_forwards]";

  return (
    <div className="relative h-8 w-full overflow-hidden">
      <div
        ref={contentRef}
        // Enable scrollbar on touchscreens, as hover is available to autoscroll
        className={`absolute inset-0 flex gap-2 touchscreen-scroll ${animateGroup}`}
        style={animationConfigCSS}
      >
        {items.map((techName) => (
          <TechPill key={techName} name={techName} />
        ))}
      </div>

      {shouldAnimate && (
        // Fading gradients at start and end of list
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-zinc-800 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-800 to-transparent " />
        </>
      )}
    </div>
  );
}
