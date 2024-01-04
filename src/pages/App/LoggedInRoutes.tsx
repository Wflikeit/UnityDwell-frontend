import { Navigate, Routes } from "react-router";
import { Route } from "react-router-dom";
import PublicationsPage from "../PublicationsPage/PublicationsPage.tsx";
import { AppRoutes } from "../../types/routes.ts";
import { ProtectedRouteWrapper } from "../../auth/ProtectedRouteWrapper.tsx";
import { UserRole } from "../../auth/UserRole.ts";
import BuildingsPage from "../BuildingsPage/BuildingsPage.tsx";
import ResidentsPage from "../ResidentsPage/ResidentsPage.tsx";
import BillsPage from "../BillsPage/BillsPage.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";

export const LoggedInRoutes = () => {
  return (
    <Routes>
        <Route index element={<Navigate to={AppRoutes.HOME} replace />} />
        <Route path={AppRoutes.HOME} element={<PublicationsPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRouteWrapper allowedRoles={[UserRole.ADMIN]}>
              <Routes>
                <Route path={AppRoutes.BUILDINGS} element={<BuildingsPage />} />,
                <Route path={AppRoutes.RESIDENTS} element={<ResidentsPage />} />,
                <Route path={AppRoutes.BILLS} element={<BillsPage />} />,
                <Route path="*" element={<NotFoundPage />} />,
              </Routes>
            </ProtectedRouteWrapper>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
