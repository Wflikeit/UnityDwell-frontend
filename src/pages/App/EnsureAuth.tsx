import { useEffect } from 'react';

import { useCustomNavigation } from '../../hooks/NavigationHook.ts';
import { checkTokenValidity } from '../../auth/authService.ts';
import useUnauthorizedRedirect from '../../axios/useUnauthorizedRedirect.ts';

export const EnsureAuth = () => {
  const { navigateToLoginPage } = useCustomNavigation();

  useEffect(() => {
    // Start token validity checking loop.
    checkTokenValidity(navigateToLoginPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add axios interceptor for 401 responses.
  useUnauthorizedRedirect();

  return <></>;
};