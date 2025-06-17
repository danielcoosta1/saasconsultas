// src/pages/ResetPassword/index.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toastErro, toastSucesso } from "../../utils/toast";
import {
  ButtonSubmit,
  CampoInput,
  ContainerPrincipal,
  ContainerReset,
  ContainerSuperior,
  IconeSenha,
  Input,
  InputContainer,
  LabelEstilizada,
  Title,
} from "./style";
import logomarca from "../../assets/logomarca.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const { token } = useParams();
  // Obtém o token da URL

  const navigate = useNavigate();

  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      setErro(error);
      toastErro(error.message);
    }
  };

  return (
    <ContainerPrincipal>
      <ContainerReset onSubmit={handleSubmit}>
        <ContainerSuperior>
          <img src={logomarca} />
          <Title>Reset password</Title>
        </ContainerSuperior>
        <CampoInput>
          <LabelEstilizada>Password</LabelEstilizada>
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="**********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <IconeSenha
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </IconeSenha>
          </InputContainer>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <ButtonSubmit type="submit">Reset your password</ButtonSubmit>
        </CampoInput>
      </ContainerReset>
    </ContainerPrincipal>
  );
};

export default ResetPassword;
