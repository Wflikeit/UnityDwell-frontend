import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main style={{backgroundColor:"rgba(236, 235, 255, 1)"}}>
      <Outlet />
    </main>
  );
};

export default Main;
