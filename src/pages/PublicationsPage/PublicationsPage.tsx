import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box/Box';
import PublicationsList from './PublicationsList.tsx';

const PublicationsPage = (): React.JSX.Element => {
  // const { id } = useParams();
  const id = "04678797-6435-45d1-a748-770b33a1917b";
  return (
    <>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <Box sx={{ m: 7, ml: 40, mr: 40 }}>
        <PublicationsList  housingAssociationId={id}/>
      </Box>
    </>
  );
};

export default PublicationsPage;
