import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toastErro } from "../../utils/toast";
import { useAuth } from "../../hooks/useAuth";

const RotaPrivada = () => {
  const { usuario } = useAuth();
  const location = useLocation();

  // Se o usuário não estiver logado, mostramos uma mensagem de erro
  useEffect(() => {
    if (!usuario) {
      toastErro("Você precisa estar logado para acessar essa página!");
    }
  }, [usuario]);

  // Se estiver autenticado, renderiza as rotas filhas
  // Caso contrário, redireciona para o Login e guarda a rota anterior em state.from para redirecionamento futuro, se necessário.
  return usuario ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RotaPrivada;