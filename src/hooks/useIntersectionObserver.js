import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
}

export function useMediaQuery(query) {
  const subscribe = useCallback((callback) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  }, [query]);
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export function useActiveSection(sectionIds, scrollY, offset = 200) {
  const activationLine = scrollY + offset;
  const currentSection = sectionIds
    .map((id) => {
      const element = document.getElementById(id);
      return element
        ? { id, top: element.getBoundingClientRect().top + scrollY }
        : null;
    })
    .filter((section) => section && section.top <= activationLine)
    .sort((first, second) => first.top - second.top)
    .at(-1);

  return currentSection?.id || sectionIds[0] || '';
}

export function useTypewriter(text, speed = 50, delay = 0) {
  const [typing, setTyping] = useState({ text, displayText: '', isComplete: false });

  useEffect(() => {
    let i = 0;
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        const isComplete = i >= text.length;
        setTyping({ text, displayText: text.slice(0, i), isComplete });
        if (isComplete) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return {
    displayText: typing.text === text ? typing.displayText : '',
    isComplete: typing.text === text && typing.isComplete,
  };
}

export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}