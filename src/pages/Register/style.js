import styled from "styled-components";

export const ContainerPrincipal = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 75rem;
  height: 100vh;
  align-items: center;
  justify-content: center;

  gap: 10rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerFoto = styled.div`
  img {
    width: 100%;
    min-width: 350px;
  }
`;

export const Form = styled.form`
  background: #fff;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ContainerBt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.large} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

export const CampoInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const LabelEstilizada = styled.label`
  font-size: 0.75rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const IconeSenha = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  padding-right: 40px; /* Espaço para o ícone */
  border: none;
  background-color: ${({ theme }) => theme.colors.inputs};
  border-radius: 4px;
  font-size: 14px;
`;

export const ButtonSubmit = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContainerLogin = styled.div`
  text-align: center;
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing.medium};

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContainerSucess = styled.div`
  background: #fff;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxlarge};
`;

export const ContainerIcones = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  padding: 3em;
  img {
    object-fit: cover;
    max-width: 78px;
  }
`;

export const ButtonGoHome = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  a {
     color: #fff;
    text-decoration: none;
  }
`;
