import { Button } from 'components/Button';
import { useAppContext } from 'hooks';
import React, { useEffect, useId, useState } from 'react';
import styles from './ThemeToggle.module.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours24 = time.getHours().toString().padStart(2, '0');
  const hours12 = (hours => {
    const parsedHours = parseInt(hours, 10);
    return (parsedHours % 12 || 12).toString().padStart(2, '0');
  })(hours24);

  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <p
      style={{ fontSize: '13px', width: '90px' }}
    >{`${hours12}:${minutes}:${seconds} ${ampm}`}</p>
  );
};

export const ThemeToggle = ({ isMobile, ...rest }) => {
  const { dispatch } = useAppContext();
  const id = useId();
  const maskId = `${id}theme-toggle-mask`;
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    dispatch({ type: 'toggleTheme' });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Button
        iconOnly
        style={{ width: '122px' }}
        className={styles.toggle}
        data-mobile={isMobile}
        aria-label="Toggle theme"
        onClick={handleClick}
        {...rest}
      >
        <svg
          aria-hidden
          className={styles.svg}
          width="38"
          height="38"
          viewBox="0 0 38 38"
        >
          <defs>
            <mask id={maskId}>
              <circle className={styles.circle} data-mask={true} cx="19" cy="19" r="13" />
              <circle className={styles.mask} cx="25" cy="14" r="9" />
            </mask>
          </defs>
          <path
            className={styles.path}
            d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          />
          <circle
            className={styles.circle}
            mask={`url(#${maskId})`}
            cx="19"
            cy="19"
            r="12"
          />
        </svg>
        {isMounted && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <DigitalClock />
          </React.Suspense>
        )}
      </Button>

      {/* <h1> {`${hours}:${minutes}:${seconds}`}</h1> */}

      {/* <h1> {formattedTime}</h1>
      
      
      
      */}
    </>
  );
};
