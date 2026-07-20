import { useContext } from 'react';
import { ThemeContext } from '.';
import type { Theme } from './theme';

export function useTheme(): Theme {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
