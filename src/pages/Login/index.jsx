import {
  ContainerPrincipal,
  Form,
  Input,
  Title,
  ContainerForm,
  ContainerFoto,
  ContainerBt,
  ButtonSubmit,
  ButtonLogin,
  Divider,
  CampoInput,
  LabelEstilizada,
  IconeSenha,
  InputContainer,
} from "./style";

import loginImg from "../../assets/login.png";
import logomarca from "../../assets/logomarca.png";
import logoGoogle from "../../assets/google.png";
import logoFb from "../../assets/facebook.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }
    // Aqui você integrará com seu endpoint de login futuramente.
    console.log("Tentando logar com:", { email, senha });
  };

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <img src={logomarca} />
          <Title>Log in</Title>
          <ContainerBt>
            <ButtonLogin>
              <img src={logoGoogle} />
              Google
            </ButtonLogin>
            <ButtonLogin>
              <img src={logoFb} />
              Facebook
            </ButtonLogin>
          </ContainerBt>
          <Divider>Or</Divider>
          <CampoInput>
            <LabelEstilizada>Email Adress</LabelEstilizada>
            <Input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CampoInput>
          <CampoInput>
            <LabelEstilizada>Password</LabelEstilizada>
            <InputContainer>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <IconeSenha onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </IconeSenha>
            </InputContainer>
          </CampoInput>

          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <ButtonSubmit type="submit">Log in</ButtonSubmit>
          
        </Form>
      </ContainerForm>
      <ContainerFoto>
        <img src={loginImg} />
      </ContainerFoto>
    </ContainerPrincipal>
  );
};

export default Login;
