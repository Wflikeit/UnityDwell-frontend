import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box/Box';
import PublicationsList from './PublicationsList.tsx';

const PublicationsPage = (): React.JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <Box sx={{ m: 7, ml: 40, mr: 40 }}>
        <PublicationsList />
      </Box>
    </>
  );
};

export default PublicationsPage;
