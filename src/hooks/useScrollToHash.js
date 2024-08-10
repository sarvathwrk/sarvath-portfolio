import { useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const { asPath, push } = useRouter();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      if (typeof hash !== 'string') {
        console.error('Invalid hash value:', hash);
        return;
      }

      const id = hash.split('#')[1];
      if (!id) {
        console.error('Hash does not contain an ID:', hash);
        return;
      }

      const targetElement = document.getElementById(id);
      if (!targetElement) {
        console.error('No element found with ID:', id);
        return;
      }

      const route = asPath.split('#')[0];
      const newPath = `${route}#${id}`;

      targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);

          if (window.location.pathname === route) {
            onDone?.();
            push(newPath, null, { scroll: false });
          }
        }, 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [push, reduceMotion, asPath]
  );

  return scrollToHash;
}
