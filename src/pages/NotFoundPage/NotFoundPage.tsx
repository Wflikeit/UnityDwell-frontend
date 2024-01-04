import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box/Box';

import Typography from '@mui/material/Typography/Typography';


const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h1">404 Not Found</Typography>
                <a href="/publications">Home Page</a>
            </Box>
        </>
    );
};
export default NotFoundPage;


