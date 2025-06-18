// src/pages/Recover/index.jsx

import {
  ButtonSubmit,
  CampoInput,
  ContainerPrincipal,
  ContainerRecover,
  ContainerSuperior,
  Input,
  LabelEstilizada,
  Title,
} from "./style";

import logomarca from "../../assets/logomarca.png";
import { useState } from "react";
import { toastErro, toastSucesso } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    if (!email) {
      setErro("Por favor, digite o seu e-mail");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/recover`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.erro || "Erro ao enviar solicitação.");
      }

      toastSucesso(
        "E-mail de recuperação enviado! Verifique sua caixa de entrada."
      );
      // Redireciona para a página ResetPassword
      navigate(`/reset-password`);
    } catch (error) {
      toastErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ContainerPrincipal>
      <ContainerRecover onSubmit={handleSubmit}>
        <ContainerSuperior>
          <img src={logomarca} />
          <Title>Recover</Title>
        </ContainerSuperior>

        <CampoInput>
          <LabelEstilizada>Email adress</LabelEstilizada>

          <Input
            type={email}
            id="email"
            placeholder="exemple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <ButtonSubmit type="submit" disabled={carregando}>
            {carregando ? <>🔄 Loading...</> : "Log in"}
          </ButtonSubmit>
        </CampoInput>
      </ContainerRecover>
    </ContainerPrincipal>
  );
};

export default Recover;
