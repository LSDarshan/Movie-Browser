import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000, // converting ms → seconds
        onComplete: onLetterAnimationComplete,
      }
    );
  }, );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "inline-block", textAlign }}
    >
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;