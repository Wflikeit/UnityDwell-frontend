import '/src/scss/loginPage.scss';
import { Box, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();



  const onClickAction = async () => {
    await loginWithRedirect({
      authorizationParams: {
        redirect_uri: 'http://localhost:5173/auth',
      },
    });
  };

  return (
    <>
      <Box className="login__page__container">
        <Typography variant="h3" className="welcoming__text">
          Welcome to
        </Typography>
        <Typography variant="h3" className="welcoming__text">
          UnityDwell
        </Typography>
        <Button id="sign__in__button" onClick={onClickAction}>
          Sign in
        </Button>
      </Box>
    </>
  );
};
export default LoginForm;
