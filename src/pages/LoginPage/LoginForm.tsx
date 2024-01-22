import '/src/scss/loginPage.scss';
import { Box, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { setAuthorizationHeader, TOKEN_KEY } from '../../auth/authService.ts';
import { useCustomNavigation } from '../../hooks/NavigationHook.ts';

const LoginForm = () => {
  const { getAccessTokenWithPopup } = useAuth0();
  const { navigateToHome, navigateToLoginPage } = useCustomNavigation();

  const onClickAction = async () => {
    try {
      const accessToken = await getAccessTokenWithPopup();
      if (typeof accessToken === 'string') {
        await setAuthorizationHeader(accessToken);
        sessionStorage.setItem(TOKEN_KEY, accessToken);
        navigateToHome();
      }
    } catch (error) {
      console.error('Error accessing an access token:', error);
      navigateToLoginPage();
    }
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
