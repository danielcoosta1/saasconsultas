import { Sidebar } from "./style";

const SideBar = () => {
  return (
    <Sidebar>
      <nav>
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/analytics">Analytics</a>
          </li>
          <li>
            <a href="/schedule">Agendamentos</a>
          </li>
          <li>
            <a href="/calendar">Calendário</a>
          </li>
          <li>
            <a href="/notifications">Notificações</a>
          </li>
          <li>
            <a href="/settings">Configurações</a>
          </li>
          <li>
            <a href="/profile">Perfil</a>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
};

export default SideBar;
