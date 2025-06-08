// src/pages/ResetPassword/index.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toastErro, toastSucesso } from "../../utils/toast";

const ResetPassword = () => {
  const { token } = useParams(); // Obtém o token da URL
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!senha) {
    toastErro("Digite uma nova senha.");
    return;
  }

  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
      },
      body: JSON.stringify({ senha }),
    });

    if (!response.ok) {
      throw new Error("Erro ao redefinir senha.");
    }

    toastSucesso("Senha alterada com sucesso!");
    navigate("/login");
  } catch (error) {
    toastErro(error.message);
  }
};

  return (
    <div>
      <h2>Redefinir Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Digite sua nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Alterar Senha</button>
      </form>
    </div>
  );
};

export default ResetPassword;