"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = React.PropsWithChildren<{
  as?: React.ElementType;
  delay?: number;   // بالمللي ثانية
  className?: string;
  once?: boolean;   // false لو تبيها تتكرر كل ما تطلع/تختفي
}>;

export function Reveal({ as: Tag = "div", delay = 0, className, once = true, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
    once,
  });

// in Reveal.tsx
return (
  <Tag
    ref={ref}
    style={{ transitionDelay: `${delay}ms` }}
    className={cn("reveal transform-gpu", inView && "reveal-show", className)}
  >
    {children}
  </Tag>
);

}
