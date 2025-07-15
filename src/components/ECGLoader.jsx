import React, { useEffect, useState } from 'react';
import './ECGLoader.css';

const ECGLoader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 800); // matches fade duration
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`ecg-loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="ecg-wrapper">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="446.667px"
          height="99.174px"
          viewBox="0 0 446.667 99.174"
          xmlSpace="preserve"
        >
          <g>
            <path
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M379.833,54.893H179.452
              c-0.417,0-0.802,0.221-1.012,0.581l-4.204,7.206l-4.489-12.481
              c-0.162-0.451-0.582-0.758-1.061-0.775c-0.476-0.02-0.919,0.259-1.113,0.697
              l-3.895,8.809l-4.686-27.542c-0.097-0.572-0.6-0.984-1.177-0.975
              c-0.58,0.01-1.064,0.443-1.14,1.018l-4.409,33.444l-3.957-19.977
              c-0.097-0.493-0.499-0.869-0.998-0.934c-0.498-0.064-0.983,0.196-1.204,0.648
              l-5.148,10.54H66.833"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ECGLoader;
