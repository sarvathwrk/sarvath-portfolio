import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.css'; // Assuming you have a CSS module for styling

export const Toast = ({ message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

