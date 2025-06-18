// src/context/auth/AuthProvider.jsx
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { initialState } from "./inicialState";
import { loginUsuario, logoutUsuario } from "./authService";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credenciais) => {
    try {
      const { usuario, token } = await loginUsuario(credenciais);
      // Despacha o LOGIN com os dados do usuário e o token
      dispatch({ type: "LOGIN", payload: { usuario, token } });
    } catch (erro) {
      console.error("Erro no login:", erro.message);
      throw erro;
    }
  };

  const logout = () => {
    logoutUsuario();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ usuario: state.usuario, token: state.token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};