import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <span className="copyright">Copyright &copy; {new Date().getFullYear()} UnityDwell</span>
    </footer>
  );
};

export default Footer;
