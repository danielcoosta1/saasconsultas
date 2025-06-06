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

export const ContainerRecover = styled.form`
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
export const ContainerSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 92px;
  }
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const CampoInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  justify-content: center;
  gap: 0.5em;
  padding: 0 2rem;
`;

export const LabelEstilizada = styled.label`
  font-size: 0.75rem;
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
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
