import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import LoginPage from '../LoginPage/LoginPage.tsx';
import { ProtectedRouteWrapper } from '../../auth/ProtectedRouteWrapper.tsx';
import { UserRole } from '../../auth/UserRole.ts';
import { EnsureAuth } from './EnsureAuth.tsx';
import { Auth } from '../../auth/Auth.tsx';
import { LoggedInRoutes } from './LoggedInRoutes.tsx';
import Layout from '../../components/layout/Layout.tsx';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements([
      // eslint-disable-next-line react/jsx-key
      <Route path={AppRoutes.LOGIN_PAGE} element={<LoginPage />} />,
      // eslint-disable-next-line react/jsx-key
      <Route path={AppRoutes.AUTH} element={<Auth />} />,
      // eslint-disable-next-line react/jsx-key
      <Route
        path="*"
        element={
          <ProtectedRouteWrapper allowedRoles={[UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.FLAT_OWNER]}>
              <LoggedInRoutes />
          </ProtectedRouteWrapper>
        }
      />,
    ])
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <EnsureAuth />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
