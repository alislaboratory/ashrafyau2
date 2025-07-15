import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.tilt-button');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    buttons.forEach((button) => {
      const content = button;
      const rotationFactor = 3;

      if (!isTouchDevice) {
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (rotationFactor * (x - centerX)) / centerX;
          const rotateX = (-rotationFactor * (y - centerY)) / centerY;

          content.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
          `;

          button.style.setProperty('--x', `${(x / rect.width) * 100}%`);
          button.style.setProperty('--y', `${(y / rect.height) * 100}%`);
        });

        button.addEventListener('mouseleave', () => {
          content.style.transform = 'rotateX(0) rotateY(0)';
          content.style.transition = 'transform 0.3s ease';
          setTimeout(() => {
            content.style.transition = '';
          }, 300);
        });
      }
    });
  }, []);

  return (
    <nav className="sidebar">
      {sections.map((section) => (
        <button key={section.id} onClick={() => scrollTo(section.id)} className="tilt-button">
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
