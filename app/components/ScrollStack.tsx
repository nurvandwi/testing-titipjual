"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollStackProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollStack({
  children,
  delay = 0,
  duration = 800,
  className = "",
}: ScrollStackProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [transform, setTransform] = useState({ translateY: 0, scale: 1, rotateX: 0, opacity: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      const viewportCenter = windowHeight / 2;
      
      // Calculate how far the element is from viewport center
      const distanceFromCenter = elementCenter - viewportCenter;
      const maxDistance = windowHeight / 2 + elementHeight / 2;
      
      // Normalize to 0-1 range, where 0 = element at bottom, 1 = element at top
      const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      const progress = (normalizedDistance + 1) / 2; // Convert -1 to 1 range to 0 to 1
      
      // Stack effect: elements below viewport should appear "stacked" (scaled down, translated up, rotated)
      // Elements in viewport should be normal
      // Elements above viewport should fade out
      
      let translateY = 0;
      let scale = 1;
      let rotateX = 0;
      let opacity = 1;
      
      if (elementTop > windowHeight) {
        // Element is below viewport - stack effect
        const distance = elementTop - windowHeight;
        const maxStackDistance = windowHeight;
        const stackProgress = Math.min(1, distance / maxStackDistance);
        
        translateY = -60 * stackProgress;
        scale = 1 - 0.15 * stackProgress;
        rotateX = 5 * stackProgress;
        opacity = 0.7 + 0.3 * (1 - stackProgress);
      } else if (elementTop + elementHeight < 0) {
        // Element is above viewport - fade out
        opacity = 0;
      } else {
        // Element is in viewport - normal state
        const inViewProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        translateY = 0;
        scale = 1;
        rotateX = 0;
        opacity = 1;
      }
      
      setTransform({ translateY, scale, rotateX, opacity });
    };

    if (ref.current) {
      observer.observe(ref.current);
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });
      handleScroll(); // Initial calculation
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? transform.opacity : 0,
        transform: `translateY(${transform.translateY}px) scale(${transform.scale}) perspective(1000px) rotateX(${transform.rotateX}deg)`,
        transformStyle: "preserve-3d",
        transition: isVisible 
          ? `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
          : `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}

