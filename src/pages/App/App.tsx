import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import LoginPage from '../LoginPage/LoginPage.tsx';
import BillsPage from '../BillsPage/BillsPage.tsx';
import BuildingsPage from '../BuildingsPage/BuildingsPage.tsx';
import ResidentsPage from '../ResidentsPage/ResidentsPage.tsx';
import PublicationsPage from '../PublicationsPage/PublicationsPage.tsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.tsx';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path={AppRoutes.LOGIN_PAGE} element={<LoginPage />} />,
      <Route path={AppRoutes.BUILDINGS} element={<BuildingsPage />} />,
      <Route path={AppRoutes.RESIDENTS} element={<ResidentsPage />} />,
      <Route path={AppRoutes.BILLS} element={<BillsPage />} />,
      <Route path={AppRoutes.HOME} element={<PublicationsPage />} />,
      <Route path="*" element={<NotFoundPage />} />,
    ])
  );
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
}

export default App;
