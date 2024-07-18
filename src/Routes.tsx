import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { SettingsPage } from "./pages/settings";
import { ProfilePage } from "./pages/profile";
import { ErrorLogsPage } from "./pages/error-logs";
import { UsersPage } from "./pages/users";
import { WebsitesPage } from "./pages/websites";
import { RoutesPage } from "./pages/routespage";
import { MainLayout } from "./components/mainlayout";

function RoutesWithLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<RoutesWithLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/error-logs" element={<ErrorLogsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/routes" element={<RoutesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
