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
  strike?: {
    fromSegmentIndex: number;
    toSegmentIndex: number;
    delayMs?: number;
    durationMs?: number;
  };
}

export function AnimatedHeadline({
  segments,
  className,
  ariaLabel,
  baseDelayMs = 0,
  stepMs = 28,
  strike,
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

  const { letters, ranges, totalLetters } = useMemo(() => {
    let index = 0;
    const rangesLocal: Array<{ start: number; end: number }> = [];
    const lettersLocal = segments.map((segment, segmentIndex) => {
      const words = segment.text.split(" ");
      const segmentOffset = segment.delayOffsetMs ?? 0;
      const start = index;
      const shouldStrikeSegment =
        strike &&
        strike.fromSegmentIndex === segmentIndex &&
        strike.toSegmentIndex === segmentIndex;
      const node = (
        <span
          key={`seg-${segmentIndex}`}
          className={cn("headline-segment", segment.className)}
        >
          {shouldStrikeSegment && (
            <span
              className="headline-strike"
              style={{
                animationDelay: `${strike.delayMs ?? baseDelayMs + start * stepMs + 220}ms`,
                animationDuration: `${strike.durationMs ?? 520}ms`,
              }}
              aria-hidden
            />
          )}
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
      rangesLocal.push({ start, end: index });
      return node;
    });
    return { letters: lettersLocal, ranges: rangesLocal, totalLetters: index };
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
