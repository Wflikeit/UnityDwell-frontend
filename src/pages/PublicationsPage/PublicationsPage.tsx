import { Helmet } from 'react-helmet-async';
import { Stack } from '@mui/material';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import Box from '@mui/material/Box/Box';

const PublicationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <Box sx={{ m: 7, ml: 40, mr: 40 }}>
        <Stack spacing={2}>
          <AddNewPieceButton path="/publications" />
        </Stack>
      </Box>
    </>
  );
};

export default PublicationsPage;
