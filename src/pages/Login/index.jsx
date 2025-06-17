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
  ContainerSuperior,
} from "./style";

import loginImg from "../../assets/login.png";
import logomarca from "../../assets/logomarca.png";
import logoGoogle from "../../assets/google.png";
import logoFb from "../../assets/facebook.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toastErro, toastSucesso } from "../../utils/toast";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await login({ email, senha });
      toastSucesso("Login efetuado com sucesso");
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Erro ao fazer login:", err.message);
      setErro("E-mail ou senha inválidos.");
      toastErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <ContainerSuperior>
            <img src={logomarca} />
            <Title>Log in</Title>
          </ContainerSuperior>
          <ContainerBt>
            <ButtonLogin type="button">
              <img src={logoGoogle} />
              Google
            </ButtonLogin>
            <ButtonLogin type="button">
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
              <IconeSenha
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
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
          <ButtonSubmit type="submit" disabled={carregando}>
            {carregando ? <>🔄 Loading...</> : "Log in"}
          </ButtonSubmit>
          <ContainerNewAccount>
            <p>
              Don't have account yet ?{" "}
              <Link to="/register">Create Account</Link>
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
