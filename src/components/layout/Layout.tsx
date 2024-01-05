import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Main from "../mainContent/MainContent.tsx";

import '../../scss/layout.scss';


const Layout = (): JSX.Element => {
  return (
    <Box
      gridTemplateRows={'auto 1fr auto'}
      gridTemplateColumns={'auto 1fr'}
      display={'grid'}
      style={{ minHeight: '100vh' }}
    >
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </Box>
  );
};
export default Layout;
