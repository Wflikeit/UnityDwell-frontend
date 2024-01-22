import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import BillsTableContainer from './BillsTableContainer.tsx';
import '../../scss/billsPage.scss';


const BillsPage: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>Bills</title>
      </Helmet>
      <Box sx={{ m: 7, ml: 30, mr: 30 }}>
        <Typography variant={'h1'}>Bills</Typography>
        <Typography variant={'h5'} ml={.5}>View and Manage bills</Typography>
        <Box sx={{ mt: 4, maxWidth: '80rem' }}>
          <BillsTableContainer />
        </Box>
      </Box>
    </>
  );
};
export default BillsPage;
