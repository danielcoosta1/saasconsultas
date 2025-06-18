// src/context/auth/authService.js
import { localStorageService } from "../../services/localStorageService";

export const loginUsuario = async (credenciais) => {
  const resposta = await fetch(
    `${import.meta.env.VITE_API_URL}/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credenciais),
    }
  );

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro?.mensagem || "Credenciais inválidas");
  }

  // Supondo que a API retorne { id, nome, email, token }:
  const dados = await resposta.json();

  // Salva separadamente o usuário e o token
  localStorageService.salvar("usuario", {
    id: dados.id,
    nome: dados.nome,
    email: dados.email,
  }); //Salva apenas dados não-sensíveis

  localStorageService.salvar("token", dados.token);

  return { usuario: dados, token: dados.token };
};

export const logoutUsuario = () => {
  localStorageService.remover("usuario");
  localStorageService.remover("token");
};