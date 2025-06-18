// src/components/SideBar.jsx

import { ContainerLogo, ContainerPerfil, Sidebar } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
// Exemplo de ícones. Você pode escolher os que melhor representam cada rota.
import {
  MdDashboard,
  MdAnalytics,
  MdSchedule,
  MdCalendarToday,
  MdNotifications,
  MdSettings,
} from "react-icons/md";

import { IoLogOut } from "react-icons/io5";

import logomarca from "../../assets/logomarca.png";

const SideBar = () => {
  const navigate = useNavigate();

  const { usuario, logout } = useAuth();

  return (
    <Sidebar>
      <ContainerLogo onClick={() => navigate("/")}>
        <img src={logomarca} />
        <h2>Consultare</h2>
      </ContainerLogo>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdDashboard size={20} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdAnalytics size={20} />
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdSchedule size={20} />
              Agendamentos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdCalendarToday size={20} />
              Calendário
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdNotifications size={20} />
              Notificações
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdSettings size={20} />
              Configurações
            </NavLink>
          </li>
        </ul>
      </nav>
      <ContainerPerfil onClick={() => navigate("/profile")}>
        {usuario && (
          <>
            {/* Se o usuário possuir foto, renderiza-a, ou coloca um placeholder */}
            <img
              src={usuario.foto || "https://picsum.photos/200/300"}
              alt="Perfil"
            />
            <span>{usuario.name}</span>
          </>
        )}
        <button onClick={logout}>
          <IoLogOut size={25} />
        </button>
      </ContainerPerfil>
    </Sidebar>
  );
};

export default SideBar;
