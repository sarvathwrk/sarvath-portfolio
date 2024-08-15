import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from './style.module.css';
import ThumbUpIcon from '../../assets/ThumbUpIcon.svg';
import ThumbDownIcon from '../../assets/ThumbDownIcon.svg';

export const Feedback = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const feedbackSubmitted = Cookies.get('feedbackSubmitted');
    if (feedbackSubmitted) {
      setShowFeedback(false);
    } else {
      setShowFeedback(true);
    }
  }, []);

  const handleFeedback = async type => {
    setFeedback(type);
    setIsAnimating(true);
    setIsLoading(true);
    try {
      await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, isFeedback: true }),
      });
      setIsSubmitted(true);
      Cookies.set('feedbackSubmitted', 'true', { expires: 30 });

      setTimeout(() => {
        setShowFeedback(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsAnimating(false);
        if (!isSubmitted) {
          setIsExpanded(false);
        }
      }, 1000);
    }
  };

  if (!showFeedback) {
    return null;
  }

  return (
    <div
      className={styles.feedbackWrapper}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isAnimating && !isLoading && setIsExpanded(false)}
    >
      <div className={`${styles.feedbackContainer} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.consentText}>Feedback</div>
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
};
