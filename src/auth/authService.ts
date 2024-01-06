import axios from 'axios';

import { UserRole } from './UserRole';
import { jwtDecode } from 'jwt-decode';

type DecodedToken = {
  exp: number;
  user_roles: UserRole;
  user_email: string;
};
export const TOKEN_KEY = 'access_token';
export const checkTokenValidity = (unauthorizedCallback: () => void) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) {
    unauthorizedCallback();
    return;
  }
  const decodedToken: DecodedToken = jwtDecode(token) as DecodedToken;

  const currentTime = Date.now() / 1000;

  if (decodedToken.exp && decodedToken.exp < currentTime) {
    sessionStorage.removeItem(TOKEN_KEY);
    unauthorizedCallback();
  } else {
    const timeout = decodedToken.exp * 1000 - currentTime * 1000;
    setTimeout(() => checkTokenValidity(unauthorizedCallback), timeout);
    setAuthorizationHeader(token);
  }
};

export interface LoggedInUser {
  email: string;
  role: string;
}

export const getUserFromToken = () => {
  const decodedToken = getDecodedToken();
  if (!decodedToken) {
    return;
  }

  return {
    email: decodedToken.user_email,
    role: decodedToken.user_roles[0],
  } as LoggedInUser;
};

const getDecodedToken = () => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  if (!token) {
    return;
  }

  return jwtDecode(token) as DecodedToken;
};
export const setAuthorizationHeader = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
