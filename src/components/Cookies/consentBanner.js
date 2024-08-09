import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Script from 'next/script';
import styles from './style.module.css';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent cookie exists using js-cookie
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'true') {
      setIsConsentGiven(true);
    }
  }, []);

  const handleConsent = accepted => {
    // Set the consent cookie using js-cookie
    Cookies.set('cookie_consent', accepted, {
      expires: 365,
      path: '/',
      sameSite: 'Lax',
      secure: true,
    });

    setIsVisible(false);

    if (accepted) {
      setIsConsentGiven(true);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consent_given' });

      if (typeof window !== 'undefined') {
        window.clarity =
          window.clarity ||
          function () {
            (window.clarity.q = window.clarity.q || []).push(arguments);
          };
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}`;
        document.head.appendChild(script);
      }
    } else {
      // Deactivate Microsoft Clarity if consent is declined
      if (typeof window !== 'undefined' && window.clarity) {
        window.clarity('deactivate');
      }
    }
  };

  return (
    <>
      {isConsentGiven && (
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
            `,
          }}
        />
      )}

      {isVisible && (
        <div className={styles.consentBanner} role="dialog" aria-live="polite">
          <div className={styles.consentContent}>
            <p className={styles.consentText}>
              We use cookies to enhance your experience on our website and to analyze site
              traffic. By clicking 'Accept All Cookies,' you consent to our use of
              cookies. You can adjust your cookie preferences or learn more about our
              cookie policy in our Privacy Policy.
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
      )}
    </>
  );
};

export default ConsentBanner;
