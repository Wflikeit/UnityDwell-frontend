import React, { useMemo } from 'react';

import { UserRole } from './UserRole';
import { LoggedInUser, getUserFromToken } from './authService';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.tsx';
import {useCustomNavigation} from '../hooks/NavigationHook.ts';

type ProtectedRouteWrapperProps = {
  allowedRoles: UserRole[];
  children: React.ReactElement;
};

export const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapperProps> = ({ allowedRoles, children }) => {
  const user: LoggedInUser | undefined = useMemo(() => getUserFromToken(), []);

  const { navigateToLoginPage } = useCustomNavigation();

  const hasValidRole: boolean = useMemo(() => {
    if (!user) {
      navigateToLoginPage();
      return false;
    }
    return allowedRoles.includes(user?.role as UserRole);
  }, [navigateToLoginPage, allowedRoles, user]);

  if (!hasValidRole) {
    return <NotFoundPage />;
  }

  return children;
};
