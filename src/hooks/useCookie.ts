import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Ensure you have 'js-cookie' installed
// Types for the untyped `js-cookie` package are declared in `./js-cookie.d.ts`.

export function useCookie<T = string>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const cookieValue = Cookies.get(key);
      // Check if cookieValue is valid JSON
      if (cookieValue) {
        try {
          return cookieValue as T;
        } catch (error) {
          console.error('Failed to parse cookie as JSON:', error);
          return cookieValue as T; // Fallback to raw cookie value if parsing fails
        }
      }
      return initialValue;
    } catch (error) {
      console.error('Failed to get cookie:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      Cookies.set(
        key,
        typeof value === 'object' ? JSON.stringify(value) : (value as string),
        {
          expires: 365,
        }
      );
    } catch (error) {
      console.error('Failed to set cookie:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
