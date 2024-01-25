import '/src/scss/collapsible.scss';
import React from 'react';

interface CollapsibleProps {
  isOpen: boolean;
  component: React.JSX.Element;
}

const Collapsible: React.FC<CollapsibleProps> = ({ isOpen = false, component }) => {
  return (
    <div className={`collapsible ${isOpen ? 'open' : 'closed'}`} style={{ padding: '2rem', paddingBottom: '0.5rem' }}>
      <span className={!isOpen ? 'notOpen' : ''}>
      {component}
      </span>
    </div>
  );
};

export default Collapsible;