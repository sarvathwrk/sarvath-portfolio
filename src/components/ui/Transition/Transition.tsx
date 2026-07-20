import { AnimatePresence, usePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, RefObject } from 'react';

export type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';

export type TransitionTimeout = number | { enter: number; exit: number };

export interface TransitionProps {
  children: (visible: boolean, status: TransitionStatus) => ReactNode;
  timeout?: TransitionTimeout;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  in?: boolean | string;
  unmount?: boolean;
}

/**
 * A Framer Motion AnimatePresence implementation of `react-transition-group`
 * for handling vanilla CSS transitions.
 */
export const Transition = ({
  children,
  timeout = 0,
  onEnter,
  onEntered,
  onExit,
  onExited,
  in: show,
  unmount = false,
}: TransitionProps) => {
  const enterTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const exitTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {(show || !unmount) && (
        <TransitionContent
          timeout={timeout}
          enterTimeout={enterTimeout}
          exitTimeout={exitTimeout}
          onEnter={onEnter}
          onEntered={onEntered}
          onExit={onExit}
          onExited={onExited}
          show={show}
        >
          {children}
        </TransitionContent>
      )}
    </AnimatePresence>
  );
};

interface TransitionContentProps {
  children: (visible: boolean, status: TransitionStatus) => ReactNode;
  timeout: TransitionTimeout;
  enterTimeout: RefObject<ReturnType<typeof setTimeout> | undefined>;
  exitTimeout: RefObject<ReturnType<typeof setTimeout> | undefined>;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  show?: boolean | string;
}

const TransitionContent = ({
  children,
  timeout,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  show,
}: TransitionContentProps) => {
  const [status, setStatus] = useState<TransitionStatus>('exited');
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(false);
  const splitTimeout = typeof timeout === 'object';

  useEffect(() => {
    if (hasEntered || !show) return;

    const actualTimeout = typeof timeout === 'object' ? timeout.enter : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setHasEntered(true);
    setStatus('entering');
    onEnter?.();

    enterTimeout.current = setTimeout(() => {
      setStatus('entered');
      onEntered?.();
    }, actualTimeout);
    // Only dependencies that need to trigger this effect
  }, [hasEntered, show, splitTimeout, timeout, onEnter, onEntered, enterTimeout, exitTimeout]);

  useEffect(() => {
    if (isPresent && show) return;

    const actualTimeout = typeof timeout === 'object' ? timeout.exit : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setStatus('exiting');
    onExit?.();

    exitTimeout.current = setTimeout(() => {
      setStatus('exited');
      safeToRemove?.();
      onExited?.();
    }, actualTimeout);
    // Only dependencies that need to trigger this effect
  }, [isPresent, show, splitTimeout, timeout, onExit, safeToRemove, onExited, enterTimeout, exitTimeout]);

  return children(hasEntered && show ? isPresent : false, status);
};
