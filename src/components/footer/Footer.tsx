import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(236, 235, 255, 1)' }}>
      <span className="copyright">Copyright &copy; {new Date().getFullYear()} UnityDwell</span>
    </footer>
  );
};

export default Footer;
