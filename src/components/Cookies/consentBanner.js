import { useState, useEffect } from 'react';
import styles from './style.module.css'; // Import the CSS module

const CONSENT_KEY = 'clarity_consent';
const CLARITY_SCRIPT_URL = `https://www.clarity.ms/tag/${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}`;

const loadClarityScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('clarity-script')) {
      console.log('Clarity script already loaded.');
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'clarity-script';
    script.async = true;
    script.src = CLARITY_SCRIPT_URL;

    script.onload = () => {
      console.log('Clarity script loaded successfully.');
      resolve();
    };

    script.onerror = () => {
      console.error('Error loading Clarity script.');
      reject(new Error('Clarity script failed to load.'));
    };

    document.head.appendChild(script);
  });
};

const waitForClarity = (timeout = 10000) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const checkClarity = () => {
      if (typeof window.clarity === 'function') {
        resolve();
        return;
      }
      if (Date.now() - start > timeout) {
        reject(new Error('Clarity function not available within timeout.'));
        return;
      }
      setTimeout(checkClarity, 500);
    };

    checkClarity();
  });
};

const initializeClarity = accepted => {
  const maxRetries = 10;
  let retries = 0;

  const retryInterval = setInterval(() => {
    if (typeof window.clarity === 'function') {
      window.clarity('consent', accepted);
      clearInterval(retryInterval);
      console.log(`Clarity consent ${accepted ? 'granted' : 'declined'}.`);
    } else if (retries >= maxRetries) {
      clearInterval(retryInterval);
      console.error('window.clarity is not available after multiple retries.');
    }
    retries++;
  }, 500);
};

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === null) {
          setIsVisible(true);
        } else {
          await loadClarityScript();
          await waitForClarity();
          initializeClarity(consent === 'true');
        }
      } catch (error) {
        console.error('Error during consent check or Clarity initialization:', error);
      }
    };

    checkConsent();

    const handleConsentGranted = async () => {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (consent === 'true') {
        try {
          await loadClarityScript();
          await waitForClarity();
          initializeClarity(true);
        } catch (error) {
          console.error('Error during Clarity initialization:', error);
        }
      }
    };

    window.addEventListener('consentGranted', handleConsentGranted);

    return () => {
      window.removeEventListener('consentGranted', handleConsentGranted);
    };
  }, []);

  const handleConsent = async accepted => {
    localStorage.setItem(CONSENT_KEY, accepted.toString());
    setIsVisible(false);
    try {
      await loadClarityScript();
      await waitForClarity();
      initializeClarity(accepted);
    } catch (error) {
      console.error('Error during Clarity initialization:', error);
    }

    const event = new Event('consentGranted');
    window.dispatchEvent(event);
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
