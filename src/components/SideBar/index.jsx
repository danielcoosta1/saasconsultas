// src/components/SideBar.jsx

import { ContainerLogo, Sidebar } from "./style";
import { NavLink } from "react-router-dom";
// Exemplo de ícones. Você pode escolher os que melhor representam cada rota.
import {
  MdDashboard,
  MdAnalytics,
  MdSchedule,
  MdCalendarToday,
  MdNotifications,
  MdSettings,
  MdPerson,
} from "react-icons/md";
import logomarca from "../../assets/logomarca.png";

const SideBar = () => {
  return (
    <Sidebar>
      <ContainerLogo>
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
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdPerson size={20} />
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
};

export default SideBar;
