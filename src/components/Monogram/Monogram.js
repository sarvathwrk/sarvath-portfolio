/* eslint-disable react/jsx-key */

'use client';
import { forwardRef, useEffect, useId } from 'react';
import styles from './Monogram.module.css';
import Link from 'next/link';
import { Logo } from './Logo';
export const Monogram = forwardRef(
  ({ highlight, className, logostyle, onClick, route, ...props }, ref) => {
    const id = useId();
    const clipId = `${id}monogram-clip`;

    return (
      <>
        <Link aria-label={`logo`} href={route === '/' ? '/#intro' : '/'} scroll={false}>
          <span data-navbar-item className={logostyle} onClick={onClick}>
            <div className="logoicon show" key={`logo`}>
              {
                <Logo
                  highlightref={highlight}
                  highlight={styles.highlight}
                  monogram={styles.monogram}
                  className={className}
                  clipId={clipId}
                  ref={ref}
                  {...props}
                />
              }
            </div>
          </span>
        </Link>
      </>
    );
  }
);
