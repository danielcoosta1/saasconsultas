import styled from "styled-components";

export const ContainerPrincipal = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 75rem;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
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
    max-width: 500px;
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

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
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
