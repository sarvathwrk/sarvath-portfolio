import { useEffect, useState } from 'react';

export function useInViewport(
  elementRef,
  unobserveOnIntersect,
  options = {},
  shouldObserve = true
) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  // Callers commonly pass an inline options object, which is a new reference
  // every render. Depend on its serialized value so the observer is only
  // recreated when the actual options change (otherwise the effect re-runs
  // every render, causing an infinite update loop).
  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    if (!elementRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;

      setIntersect(isIntersecting);

      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);

    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, unobserveOnIntersect, optionsKey, isUnobserved, shouldObserve]);

  return intersect;
}
