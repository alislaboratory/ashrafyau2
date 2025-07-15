import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Ali Ashrafy. All rights reserved.</p>
      <p>
        Built with ❤️ using React. | <a href="mailto:ali@ashrafy.au">Contact</a>
      </p>
      <p>
  <a href="/assets/Ali_s_CV.pdf" target="_blank" rel="noopener noreferrer">
    View My CV
  </a>
</p>

    </footer>
  );
};

export default Footer;
