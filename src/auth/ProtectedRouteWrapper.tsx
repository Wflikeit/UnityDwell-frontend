import React, { useEffect, useMemo } from 'react';

import { UserRole } from './UserRole';
import { LoggedInUser, getUserFromToken } from './authService';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.tsx';
import { useCustomNavigation } from '../hooks/NavigationHook.ts';

type ProtectedRouteWrapperProps = {
  allowedRoles: UserRole[];
  children: React.ReactElement;
};

export const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapperProps> = ({ allowedRoles, children }) => {
  const user: LoggedInUser | undefined = getUserFromToken();

  const { navigateToLoginPage } = useCustomNavigation();

  useEffect(() => {
    if (!user) {
      navigateToLoginPage();
    }
  }, [user, navigateToLoginPage]);

  const hasValidRole: boolean = useMemo(() => {
    return allowedRoles.includes(('ROLE_' + user?.role) as UserRole);
  }, [allowedRoles, user]);

  if (!hasValidRole) {
    return <NotFoundPage />;
  }

  return children;
};
