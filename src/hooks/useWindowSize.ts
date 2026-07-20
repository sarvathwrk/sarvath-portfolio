import { useCallback, useEffect, useRef, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

interface DimensionsCache {
  w: number;
  h: number;
}

export function useWindowSize(): WindowSize {
  // `dimensions.current` is intentionally a function: it is used below as the
  // lazy initializer for `useState` (React invokes it once to produce the
  // fallback size) while also serving as a scratch cache for the iOS ruler
  // measurement. The casts preserve this original runtime behavior.
  const dimensions = useRef<DimensionsCache>(
    (() => ({ w: 1280, h: 800 })) as unknown as DimensionsCache
  );

  const createRuler = useCallback(() => {
    let ruler: HTMLDivElement | null = document.createElement('div');

    ruler.style.position = 'fixed';
    ruler.style.height = '100vh';
    ruler.style.width = '0';
    ruler.style.top = '0';

    document.documentElement.appendChild(ruler);

    // Set cache conscientious of device orientation
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;

    // Clean up after ourselves
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);

  // Get the actual height on iOS Safari
  const getHeight = useCallback(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);

    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }

    return window.innerHeight;
  }, [createRuler]);

  const getSize = useCallback((): WindowSize => {
    return {
      width: window.innerWidth,
      height: getHeight(),
    };
  }, [getHeight]);

  const [windowSize, setWindowSize] = useState<WindowSize>(
    dimensions.current as unknown as WindowSize
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);

  return windowSize;
}
