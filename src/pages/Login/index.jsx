
import {
  ContainerPrincipal,
  Form,
  Input,
  Button,
  Title,
  ContainerForm,
  ContainerFoto,
} from "./style";


import loginImg from "../../assets/login.png"
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
          <Title>Entrar</Title>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
      <ContainerFoto>
        <img src={loginImg} />
      </ContainerFoto>
    </ContainerPrincipal>
  );
};

export default Login;
