import { THEME } from '../../theme/theme.ts';
import { ThemeProvider } from 'react-query/types/devtools/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import LoginPage from '../LoginPage/LoginPage.tsx';
import BillsPage from '../BillsPage/BillsPage.tsx';
import BuildingsPage from '../BuildingsPage/BuildingsPage.tsx';
import ResidentsPage from '../ResidentsPage/ResidentsPage.tsx';
import PublicationsPage from '../PublicationsPage/PublicationsPage.tsx';

function App() {

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.BILLS} element={<BillsPage />} />
            <Route path={AppRoutes.BUILDINGS} element={<BuildingsPage />} />
            <Route path={AppRoutes.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={AppRoutes.HOME} element={<PublicationsPage />} />
            <Route path={AppRoutes.RESIDENTS} element={<ResidentsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
