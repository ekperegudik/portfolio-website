"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./animated-headline.css";

type Segment = {
  text: string;
  className?: string;
  delayOffsetMs?: number;
};

interface AnimatedHeadlineProps {
  segments: Segment[];
  className?: string;
  ariaLabel: string;
  baseDelayMs?: number;
  stepMs?: number;
}

export function AnimatedHeadline({
  segments,
  className,
  ariaLabel,
  baseDelayMs = 0,
  stepMs = 28,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const letters = useMemo(() => {
    let index = 0;
    const lettersLocal = segments.map((segment, segmentIndex) => {
      const words = segment.text.split(" ");
      const segmentOffset = segment.delayOffsetMs ?? 0;
      const node = (
        <span
          key={`seg-${segmentIndex}`}
          className={segment.className}
        >
          {words.map((word, wordIndex) => (
            <span key={`word-${segmentIndex}-${wordIndex}`} className="headline-word">
              {Array.from(word).map((char) => {
                const delay = baseDelayMs + index * stepMs + segmentOffset;
                const key = `char-${segmentIndex}-${index}`;
                index += 1;
                return (
                  <span
                    key={key}
                    className="headline-letter"
                    style={{ animationDelay: `${delay}ms` }}
                    aria-hidden
                  >
                    {char}
                  </span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <span className="headline-space" aria-hidden>
                  {"\u00A0"}
                </span>
              )}
            </span>
          ))}
        </span>
      );
      return node;
    });
    return lettersLocal;
  }, [segments, baseDelayMs, stepMs]);

  return (
    <h1
      ref={ref}
      className={cn(
        "headline-letters relative leading-[1.2] mb-5 text-4xl font-semibold text-foreground break-keep hyphens-none",
        visible && "is-visible",
        className,
      )}
      aria-label={ariaLabel}
    >
      <span className="headline-wrap">{letters}</span>
    </h1>
  );
}
