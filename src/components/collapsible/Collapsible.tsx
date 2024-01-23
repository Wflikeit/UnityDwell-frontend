import '/src/scss/collapsible.scss';
import React from 'react';

interface CollapsibleProps {
  isOpen: boolean;
  component: React.JSX.Element;
}
const Collapsible: React.FC<CollapsibleProps> = ({isOpen = false, component}) => {
  return (
    <div className={`collapsible ${isOpen ? 'open' : 'closed'}`}>
      {component}
    </div>
  );
};

export default Collapsible;