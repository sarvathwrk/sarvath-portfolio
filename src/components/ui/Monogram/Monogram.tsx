/* eslint-disable react/jsx-key */

'use client';
import { forwardRef, useId } from 'react';
import type { MouseEventHandler, SVGProps } from 'react';
import styles from './Monogram.module.css';
import Link from 'next/link';
import { Logo } from './Logo';

export interface MonogramProps extends Omit<SVGProps<SVGSVGElement>, 'onClick'> {
  highlight?: boolean;
  logostyle?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  route?: string;
}

export const Monogram = forwardRef<SVGSVGElement, MonogramProps>(
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
