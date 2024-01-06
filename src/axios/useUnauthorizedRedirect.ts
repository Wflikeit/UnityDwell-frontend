import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';
import { AppRoutes } from '../types/routes.ts';
import { TOKEN_KEY } from "../auth/authService.ts";

const useUnauthorizedRedirect = () => {
  const { logout } = useAuth0();

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY)
        logout({ logoutParams: { returnTo: window.location.origin + AppRoutes.LOGIN_PAGE } });
      }

      return Promise.reject(error);
    }
  );
};

export default useUnauthorizedRedirect;
