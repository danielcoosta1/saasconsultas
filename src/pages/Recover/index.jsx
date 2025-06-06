// src/pages/Recover/index.jsx

import {
  ButtonSubmit,
  CampoInput,
  ContainerPrincipal,
  ContainerRecover,
  ContainerSuperior,
  Input,
  InputContainer,
  LabelEstilizada,
  Title,
} from "./style";

import logomarca from "../../assets/logomarca.png";
import { useState } from "react";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErro("Por favor, digite o seu E-mail");
      return;
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
          <LabelEstilizada>Password</LabelEstilizada>
          <InputContainer>
            <Input
              type={email}
              id="email"
              placeholder="exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
        </CampoInput>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <ButtonSubmit type="submit">Reset your password</ButtonSubmit>
      </ContainerRecover>
    </ContainerPrincipal>
  );
};

export default Recover;
