import React from 'react';
import './GlassCard.css';
import './VitalsCard.css';


const VitalsCard = () => {
  return (
    <div className="glass-card">
      <h2 className="glass-title">Currently</h2>
      <ul className="vitals-tasks">
        <li>Term: Health Maintenance B</li>
        <li>Reading Harrison's</li>
        <li>Learning about the Renal System</li>
      </ul>
      <div className="vitals-widget">
        <h3>Vitals</h3>
        <ul>
          <li>Hours Spent on Anki: <strong>9999+</strong></li>
          <li>Patients Seen: <strong>54</strong></li>
          <li>Coffees Consumed: <strong>503</strong></li>
        </ul>
      </div>
    </div>
  );
};



export default VitalsCard;
