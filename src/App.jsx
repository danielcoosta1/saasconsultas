import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";

import DashboardLayout from "./components/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Schedule from "./pages/Schedule";
import Calendar from "./pages/Calendar";

import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth/AuthProvider";
import RotaPrivada from "./components/RotaPrivada";

import { ToastContainer } from "react-toastify";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <AuthProvider>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Rotas Protegidas com o layout de menu lateral */}
          <Route element={<RotaPrivada />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="Schedule" element={<Schedule />} />
              <Route path="calendar" element={<Calendar />} />

              {/* Rotas adicionais conforme o roadmap */}
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
