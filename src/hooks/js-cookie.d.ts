// Minimal ambient type declaration for `js-cookie`, which ships no types.
declare module 'js-cookie' {
  interface CookieAttributes {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
    [property: string]: unknown;
  }

  interface CookiesStatic {
    get(name: string): string | undefined;
    get(): { [key: string]: string };
    set(
      name: string,
      value: string,
      options?: CookieAttributes
    ): string | undefined;
    remove(name: string, options?: CookieAttributes): void;
  }

  const Cookies: CookiesStatic;
  export default Cookies;
}
