import '@/styles/reset.css';
import '@/styles/global.css';

import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { tokens, type ThemeId } from '@/components/ThemeProvider/theme';
import { VisuallyHidden } from '@/components/ui/VisuallyHidden';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { useCookie } from '@/hooks/useCookie';
import styles from '@/styles/App.module.css';
import { initialState, reducer } from '@/app/reducer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import type { AppContextValue } from '@/hooks/useAppContext';
import {
  Fragment,
  createContext,
  useEffect,
  useReducer,
  type ComponentProps,
} from 'react';
import { msToNum } from '@/lib/style';
import { ScrollRestore } from '@/app/ScrollRestore';

import ParticlesComp from '@/app/ParticlesComp';
// import ConsentBanner from '@/components/Cookies/consentBanner';
import { useFoucFix } from '@/hooks/useFoucFix';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Feedback } from '@/components/Feedback';

// The default is only used when a consumer is rendered outside the Provider,
// which never happens here — App always supplies a value below.
export const AppContext = createContext<AppContextValue>({} as AppContextValue);

const App = ({ Component, pageProps }: AppProps) => {
  // `state.theme` is optional (undefined until the first setTheme dispatch),
  // so the cookie value is typed to match what is written back to it below.
  const [storedTheme, setStoredTheme] = useCookie<string | undefined>('theme', 'dark');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { route, asPath } = useRouter();
  const canonicalRoute = route === '/' ? '' : `${asPath}`;
  useFoucFix();

  useEffect(() => {
    dispatch({ type: 'setTheme', value: storedTheme || 'dark' });
  }, [storedTheme]);

  useEffect(() => {
    setStoredTheme(state.theme);
  }, [setStoredTheme, state.theme]);

  // VisuallyHidden's props are typed for a <span>; the skip link renders as an
  // anchor (`as="a"`), so `href` is supplied via a typed spread to satisfy
  // strict mode without editing the shared foundation component.
  const skipLinkProps: ComponentProps<typeof VisuallyHidden> & { href: string } = {
    showOnFocus: true,
    as: 'a',
    className: styles.skip,
    href: '#MainContent',
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider themeId={state.theme as ThemeId | undefined}>
        <LazyMotion features={domAnimation}>
          <Fragment>
            <Head>
              <link
                rel="canonical"
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`}
              />
            </Head>
            <VisuallyHidden {...skipLinkProps}>Skip to main content</VisuallyHidden>
            <Feedback />
            <Navbar />
            <ParticlesComp />
            {/* <ConsentBanner /> */}
            <main className={styles.app} tabIndex={-1} id="MainContent">
              <AnimatePresence mode="wait">
                <m.div
                  key={route}
                  className={styles.page}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'tween',
                    ease: 'linear',
                    duration: msToNum(tokens.base.durationS) / 1000,
                    delay: 0.1,
                  }}
                >
                  <ScrollRestore />
                  <Component {...pageProps} />
                  <Analytics mode={'production'} />
                  <SpeedInsights />
                </m.div>
              </AnimatePresence>
            </main>
          </Fragment>
        </LazyMotion>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
