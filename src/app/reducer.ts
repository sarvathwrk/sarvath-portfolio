import type { AppAction } from '@/hooks/useAppContext';

/**
 * Shape of the reducer state (the `AppContext` value without `dispatch`).
 */
export interface AppState {
  menuOpen: boolean;
  theme?: string;
}

export const initialState: AppState = {
  menuOpen: false,
};

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'setTheme':
      return { ...state, theme: action.value };
    case 'toggleTheme': {
      const newThemeId = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newThemeId };
    }
    case 'toggleMenu':
      return { ...state, menuOpen: !state.menuOpen };
    default:
      throw new Error();
  }
}
