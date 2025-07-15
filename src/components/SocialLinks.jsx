// src/components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/alislaboratory" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/ali-ashrafy-711a6a295/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:ali@ashrafy.au">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
