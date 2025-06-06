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
  ContainerLogin,
} from "./style";

import registerImg from "../../assets/register.png";
import logomarca from "../../assets/logomarca.png";
import logoGoogle from "../../assets/google.png";
import logoFb from "../../assets/facebook.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");

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
          <Title>Sign Up</Title>
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
            <LabelEstilizada>Full Name</LabelEstilizada>
            <Input
              type="text"
              id="name"
              placeholder="Daniel"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </CampoInput>
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

          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <ButtonSubmit type="submit">Log in</ButtonSubmit>
          <ContainerLogin>
            <p>
              Already have an account ? <Link to="/login">Log in</Link>
            </p>
          </ContainerLogin>
        </Form>
      </ContainerForm>
      <ContainerFoto>
        <img src={registerImg} />
      </ContainerFoto>
    </ContainerPrincipal>
  );
};

export default Register;
