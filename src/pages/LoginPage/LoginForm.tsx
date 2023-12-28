import '/src/scss/loginPage.scss';
import { Box, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Box className="login__page__container">
        <Typography variant="h2" className="welcoming__text">
          {' '}
          Welcome to
        </Typography>
        <Typography variant="h2" className="welcoming__text">
          {' '}
          UnityDwell
        </Typography>
        <Button onClick={() => loginWithRedirect()}>Sign in</Button>
      </Box>
    </>
  );
};
export default LoginForm;
