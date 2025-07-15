import React, { useEffect, useState } from 'react';
import './ECGIntro.css';

const ECGIntro = ({ onFinish }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      onFinish(); // Notify parent to show main content
    }, 4000); // ECG animation + short pause

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`ecg-intro ${hidden ? 'fade-out' : ''}`}>
      <svg viewBox="0 0 1000 100" className="ecg-svg">
        <path
          d="M 0 50 H 100 L 110 30 L 120 70 L 130 50 H 250 L 260 30 L 270 70 L 280 50 H 1000"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ECGIntro;
