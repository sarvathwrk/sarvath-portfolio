import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Ensure you have 'js-cookie' installed

export function useCookie(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const cookieValue = Cookies.get(key);
      // Check if cookieValue is valid JSON
      if (cookieValue) {
        try {
          return cookieValue;
        } catch (error) {
          console.error('Failed to parse cookie as JSON:', error);
          return cookieValue; // Fallback to raw cookie value if parsing fails
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
      Cookies.set(key, typeof value === 'object' ? JSON.stringify(value) : value, {
        expires: 365,
      });
    } catch (error) {
      console.error('Failed to set cookie:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
