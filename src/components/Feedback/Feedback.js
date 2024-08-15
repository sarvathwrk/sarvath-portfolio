import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from './style.module.css';
import ThumbUpIcon from '../../assets/ThumbUpIcon.svg';
import ThumbDownIcon from '../../assets/ThumbDownIcon.svg';
import { media } from 'utils/style';
import { useWindowSize } from 'hooks';
import { usePathname } from 'next/navigation';

export const Feedback = () => {
  const router = usePathname();
  const [isView, setView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [counts, setCounts] = useState([]);
  const windowSize = useWindowSize();

  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const feedbackSubmitted = Cookies.get('feedbackSubmitted');
  useEffect(() => {
    if (router == '/about/') {
      setView(true);
    } else if (isView) {
      setView(false);
    }
  }, [router, isView]);
  useEffect(() => {
    if (feedbackSubmitted) {
      setShowFeedback(false);
    } else {
      setShowFeedback(true);
    }
  }, [feedbackSubmitted]);
  useEffect(() => {
    async function fetchFeedbackCounts() {
      try {
        if (isView && feedbackSubmitted) {
          const response = await fetch('/api/feedback', { method: 'GET' }); // Updated endpoint
          if (!response.ok) {
            const errorDetails = await response.text(); // Capture response body for more details
            throw new Error(`Network response was not ok: ${errorDetails}`);
          }
          const data = await response.json();
          setCounts(data);
        }
      } catch (error) {
        console.error('Failed to fetch feedback counts:', error);
        // Optionally, you could set an error state to show an error message in the UI
      }
    }
    fetchFeedbackCounts();
  }, [isView, feedbackSubmitted]);

  const handleFeedback = async type => {
    setFeedback(type);
    setIsAnimating(true);
    setIsLoading(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit feedback: ${await response.text()}`);
      } else {
        setIsSubmitted(true);

        setTimeout(() => {
          setShowFeedback(false);
          Cookies.set('feedbackSubmitted', 'true', { expires: 30 });
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsAnimating(false);
        if (!isSubmitted) {
          setIsExpanded(false);
        }
      }, 2000);
    }
  };

  if (showFeedback == false) {
    if (isView) {
      return (
        <div
          className={styles.feedbackWrapper}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => !isAnimating && !isLoading && setIsExpanded(false)}
        >
          <div
            className={`${styles.feedbackContainer} ${
              !isMobile ? styles.expanded : isMobile && isExpanded ? styles.expanded : ''
            }`}
          >
            <div className={styles.consentText}>Feedback</div>

            <div className={styles.expandedContent}>
              <>
                <div className={styles.feedbackText}>Visitor Like's</div>
                <div className={styles.feedbackButtons}>
                  <button
                    className={`${styles.feedbackButton} ${
                      feedback === 'up' && isAnimating ? styles.animating : ''
                    }`}
                    disabled={isAnimating || isLoading}
                  >
                    <ThumbUpIcon className={styles.thumbIcon} />{' '}
                    <p className={styles.count}>
                      {counts && counts.length > 0 && counts[0].count
                        ? counts[0].count
                        : ''}
                    </p>
                  </button>
                  <button
                    className={`${styles.feedbackButton} ${styles.down} ${
                      feedback === 'down' && isAnimating ? styles.animating : ''
                    }`}
                    disabled={isAnimating || isLoading}
                  >
                    <ThumbDownIcon className={styles.thumbIcon} />{' '}
                    <p className={styles.count}>
                      {counts && counts.length > 1 && counts[1].count
                        ? counts[1].count
                        : counts && counts.length > 0 && counts[0].count
                        ? '0'
                        : ''}
                    </p>
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div
        className={styles.feedbackWrapper}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !isAnimating && !isLoading && setIsExpanded(false)}
      >
        <div
          className={`${styles.feedbackContainer} ${isExpanded ? styles.expanded : ''}`}
        >
          {isExpanded == true ? '' : <div className={styles.consentText}>Feedback</div>}
          <div className={styles.expandedContent}>
            {isLoading ? (
              <div className={styles.loadingAnimation}>
                {feedback === 'up' ? (
                  <ThumbUpIcon className={styles.loadingThumb} />
                ) : (
                  <ThumbDownIcon className={styles.loadingThumb} />
                )}
              </div>
            ) : isSubmitted ? (
              <div className={styles.thankYouMessage}>Thanks for your feedback!</div>
            ) : (
              <>
                <div className={styles.feedbackText}>Rate your experience</div>
                <div className={styles.feedbackButtons}>
                  <button
                    className={`${styles.feedbackButton} ${
                      feedback === 'up' && isAnimating ? styles.animating : ''
                    }`}
                    onClick={() => handleFeedback('up')}
                    disabled={isAnimating || isLoading}
                  >
                    <ThumbUpIcon className={styles.thumbIcon} />
                  </button>
                  <button
                    className={`${styles.feedbackButton} ${styles.down} ${
                      feedback === 'down' && isAnimating ? styles.animating : ''
                    }`}
                    onClick={() => handleFeedback('down')}
                    disabled={isAnimating || isLoading}
                  >
                    <ThumbDownIcon className={styles.thumbIcon} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};
