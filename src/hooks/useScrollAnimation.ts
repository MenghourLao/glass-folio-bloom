
import { useEffect, useRef } from 'react';

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  animateOnce?: boolean;
};

export default function useScrollAnimation<T extends HTMLElement>(
  className: string, 
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px', animateOnce = true } = options;
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add(className);
            if (animateOnce) {
              observer.unobserve(element);
            }
          } else if (!animateOnce) {
            element.classList.remove(className);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [className, options]);
  
  return ref;
}
