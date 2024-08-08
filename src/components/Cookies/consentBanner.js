import { useState, useEffect } from 'react';
import styles from './style.module.css'; // Import the CSS module

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent cookie exists
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie_consent='));
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = async accepted => {
    document.cookie = `cookie_consent=${accepted};path=/;max-age=${60 * 60 * 24 * 365}`; // 1 year expiry

    setIsVisible(false);
    if (accepted) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consent_given' });

      // Reload the GTM script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLETAG}`;
      script.async = true;
      document.head.appendChild(script);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.consentBanner} role="dialog" aria-live="polite">
      <div className={styles.consentContent}>
        <p className={styles.consentText}>
          We use cookies to enhance your experience on our website and to analyze site
          traffic. By clicking 'Accept All Cookies,' you consent to our use of cookies.
          You can adjust your cookie preferences or learn more about our cookie policy in
          our Privacy Policy.
        </p>
        <div className={styles.consentButtons}>
          <button
            onClick={() => handleConsent(true)}
            className={`${styles.consentButton} ${styles.accept}`}
          >
            Accept Cookies
          </button>
          <button
            onClick={() => handleConsent(false)}
            className={`${styles.consentButton} ${styles.decline}`}
          >
            Decline Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
