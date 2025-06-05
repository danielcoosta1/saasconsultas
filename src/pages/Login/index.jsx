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
  ContainerNewAccount,
  ContainerRememberMe,
} from "./style";

import loginImg from "../../assets/login.png";
import logomarca from "../../assets/logomarca.png";
import logoGoogle from "../../assets/google.png";
import logoFb from "../../assets/facebook.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

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
              placeholder="example@gmail.com"
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
                placeholder="**********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <IconeSenha onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </IconeSenha>
            </InputContainer>
          </CampoInput>
          <ContainerRememberMe>
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link to="/recover">Reset Password</Link>
          </ContainerRememberMe>

          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <ButtonSubmit type="submit">Log in</ButtonSubmit>
          <ContainerNewAccount>
            <p>
              Don't have account yet?<Link to="/register">Create Account</Link>
            </p>
          </ContainerNewAccount>
        </Form>
      </ContainerForm>
      <ContainerFoto>
        <img src={loginImg} />
      </ContainerFoto>
    </ContainerPrincipal>
  );
};

export default Login;
