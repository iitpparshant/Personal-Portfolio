import React from 'react';
import './footer.css';  // Assuming you're using an external CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:yourname@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
