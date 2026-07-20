import { Icon } from '@/components/ui/Icon';
import { Monogram } from '@/components/ui/Monogram';
import { useTheme } from '@/components/ThemeProvider';
import { tokens } from '@/components/ThemeProvider/theme';
import { Transition as TransitionBase } from '@/components/ui/Transition';
import { useAppContext, useScrollToHash, useWindowSize } from '@/hooks';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cssProps, media, msToNum, numToMs } from '@/lib/style';
import { NavToggle } from './NavToggle';
import styles from './Navbar.module.css';
import { ThemeToggle } from './ThemeToggle';
import { navLinks, socialLinks } from './navData';
import Link from 'next/link';

interface TransitionProps {
  children: (visible: boolean, status: string) => ReactNode;
  in?: boolean;
  unmount?: boolean;
  timeout?: number | { enter: number; exit: number };
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}

// The shared Transition component is not yet typed; alias it with the props
// this file relies on without changing runtime behavior.
const Transition = TransitionBase as unknown as (
  props: TransitionProps
) => ReactElement | null;

interface WindowSize {
  width: number;
  height: number;
}

interface NavMeasurement {
  element: HTMLElement;
  top: number;
  bottom: number;
}

export const Navbar = () => {
  const [current, setCurrent] = useState<string>();
  const [target, setTarget] = useState<string | null>();
  const { themeId } = useTheme();
  const { menuOpen, dispatch } = useAppContext();
  const { route, asPath } = useRouter();
  const windowSize = useWindowSize() as unknown as WindowSize;
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    // Prevent ssr mismatch by storing this in state
    setCurrent(asPath);
  }, [asPath]);

  // Handle smooth scroll nav items
  useEffect(() => {
    if (!target || route !== '/') return;
    setCurrent(`${route}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [route, scrollToHash, target]);

  // Handle swapping the theme when intersecting with inverse themed elements
  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLElement>('[data-navbar-item]');
    const inverseTheme = themeId === 'dark' ? 'light' : 'dark';
    const { innerHeight } = window;

    let inverseMeasurements: NavMeasurement[] = [];
    let navItemMeasurements: NavMeasurement[] = [];

    const isOverlap = (rect1: NavMeasurement, rect2: NavMeasurement, scrollY: number) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };

    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = '';
      }
    };

    const handleInversion = () => {
      const invertedElements = document.querySelectorAll<HTMLElement>(
        `[data-theme='${inverseTheme}'][data-invert]`
      );

      if (!invertedElements) return;

      inverseMeasurements = Array.from(invertedElements).map(item => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight,
      }));

      const { scrollY } = window;

      resetNavTheme();

      for (const inverseMeasurement of inverseMeasurements) {
        if (
          inverseMeasurement.top - scrollY > innerHeight ||
          inverseMeasurement.bottom - scrollY < 0
        ) {
          continue;
        }

        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = '';
          }
        }
      }
    };

    // Currently only the light theme has dark full-width elements
    if (themeId === 'light') {
      navItemMeasurements = Array.from(navItems).map(item => {
        const rect = item.getBoundingClientRect();

        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      document.addEventListener('scroll', handleInversion);
      handleInversion();
    }

    return () => {
      document.removeEventListener('scroll', handleInversion);
      resetNavTheme();
    };
  }, [themeId, windowSize, asPath]);

  // Check if a nav item should be active
  const getCurrent = (url = ''): 'page' | undefined => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;

    if (url === nonTrailing) {
      return 'page';
    }

    return undefined;
  };

  // Store the current hash to scroll to
  const handleNavItemClick = (event: MouseEvent<HTMLElement>) => {
    const href = (event.currentTarget as HTMLAnchorElement)?.href || ''; // Safely access href
    const hash = href.split('#')[1] || ''; // Ensure hash is defined

    setTarget(null);

    if (hash && route === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = (event: MouseEvent<HTMLElement>) => {
    handleNavItemClick(event);
    if (menuOpen) dispatch({ type: 'toggleMenu' });
  };

  return (
    <header className={styles.navbar} ref={headerRef}>
      {/* <RouterLink aria-label="Home" href={route === '/' ? '/#intro' : '/'} scroll={false}>
        <span
          data-navbar-item
          className={styles.logo}
          aria-label="Mohamed Sarvath Khan, Designer"
          onClick={handleMobileNavClick}
        > */}
      <Monogram
        highlight
        onClick={handleMobileNavClick}
        logostyle={styles.logo}
        route={route}
      />
      {/* </span>
      </RouterLink> */}
      <NavToggle onClick={() => dispatch({ type: 'toggleMenu' })} menuOpen={menuOpen} />
      <nav className={styles.nav}>
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname }) => (
            <RouterLink href={pathname} scroll={false} key={label}>
              <span
                data-navbar-item
                className={styles.navLink}
                aria-current={getCurrent(pathname)}
                onClick={handleNavItemClick}
              >
                {label}
              </span>
            </RouterLink>
          ))}
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {visible => (
          <nav className={styles.mobileNav} data-visible={visible}>
            {navLinks.map(({ label, pathname }, index) => (
              <RouterLink
                className={styles.mobileNavLinkA}
                href={pathname}
                scroll={false}
                key={label}
              >
                <span
                  className={styles.mobileNavLink}
                  data-visible={visible}
                  aria-current={getCurrent(pathname)}
                  onClick={handleMobileNavClick}
                  style={cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index * 50
                    ),
                  })}
                >
                  {label}
                </span>
              </RouterLink>
            ))}
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
};

interface NavbarIconsProps {
  desktop?: boolean;
}

const NavbarIcons = ({ desktop }: NavbarIconsProps) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <Link
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={styles.navIcon} icon={icon} />
      </Link>
    ))}
  </div>
);
