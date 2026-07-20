import { AppContext } from '@/pages/_app.page';
import { Dispatch, useContext } from 'react';

/**
 * Actions accepted by the app reducer (see `@/app/reducer`).
 */
export type AppAction =
  | { type: 'setTheme'; value: string }
  | { type: 'toggleTheme' }
  | { type: 'toggleMenu' };

/**
 * Shape of the value provided by `AppContext` in `@/pages/_app.page`.
 * `AppContext` is declared there with an `any` value, so we describe the
 * runtime shape here to give consumers a typed context.
 */
export interface AppContextValue {
  menuOpen: boolean;
  theme?: string;
  dispatch: Dispatch<AppAction>;
}

export function useAppContext(): AppContextValue {
  return useContext(AppContext) as AppContextValue;
}
