import { useEffect, useState } from 'react';

/**
 * A read-only, structural view of a ref object. Declared with a `readonly`
 * `current` so any `RefObject<T>` (for `T` assignable to `Element`) can be
 * passed regardless of its exact element type.
 */
interface ElementRefLike {
  readonly current: Element | null | undefined;
}

export function useInViewport(
  elementRef: ElementRefLike | null | undefined,
  unobserveOnIntersect?: boolean,
  options: IntersectionObserverInit = {},
  shouldObserve: boolean = true
): boolean {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  // Callers commonly pass an inline options object, which is a new reference
  // every render. Depend on its serialized value so the observer is only
  // recreated when the actual options change (otherwise the effect re-runs
  // every render, causing an infinite update loop).
  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;

      setIntersect(isIntersecting);

      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);

    if (!isUnobserved && shouldObserve) {
      observer.observe(element);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, unobserveOnIntersect, optionsKey, isUnobserved, shouldObserve]);

  return intersect;
}
