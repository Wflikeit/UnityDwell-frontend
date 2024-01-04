import { setAuthorizationHeader, TOKEN_KEY } from './authService';
import { useCustomNavigation } from '../hooks/NavigationHook.ts';
import { useAuth0 } from '@auth0/auth0-react';

export const Auth = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { navigateToLoginPage, navigateToHome } = useCustomNavigation();
  const fetchData = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      sessionStorage.setItem(TOKEN_KEY, accessToken);
      setAuthorizationHeader(accessToken);
      navigateToHome();
    } catch (error) {
      console.error('Error accessing an access token:', error);
      navigateToLoginPage();
    }
  };
  fetchData();
  return <></>;
};
