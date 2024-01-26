import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box/Box';
import BuildingsList from './BuildingsList.tsx';

const BuildingsPage = () => {
  const id = "04678797-6435-45d1-a748-770b33a1917b";
  return (
    <>
      <Helmet>
        <title>Buildings</title>
      </Helmet>
      <Box sx={{ m: 7, ml: 40, mr: 40 }}>
        <BuildingsList  housingAssociationId={id}/>
      </Box>
    </>
  );
};
export default BuildingsPage;
