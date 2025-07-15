import React from 'react';
import './GlassCard.css';

const GlassCard = ({ title, children, link }) => {
  return (
    <div className="card" data-rotation-factor="2">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{children}</p>
        <div className="card-footer">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
            >
              Learn More
            </a>
          )}
          <div className="card-icon">→</div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;

