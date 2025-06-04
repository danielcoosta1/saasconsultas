// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />

        {/* Rotas Protegidas com o layout de menu lateral */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calendar />} />

          {/* Rotas adicionais conforme o roadmap */}
          <Route path="notifications" element={<Notificacoes />} />
          <Route path="configurations" element={<Configuracoes />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
