// src/components/style.js
import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebarbg};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.large};

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  nav ul {
    list-style: none;
    padding: 0;
    padding: 0;
    width: 100%;
  }

  nav ul li {
    margin: ${({ theme }) => theme.spacing.small} 0;
  }

  nav ul li a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text2};
    font-size: 1.25rem;
    transition: color 0.3s;
    font-weight: 600;
  }

  /* Quando o link estiver ativo, muda para a cor primaria */
  nav ul li a.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: -2rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: ${({ theme }) => theme.spacing.large};

  img {
    width: 90px;
    height: 90px;
  }

  h2 {
    font-size: 1.25rem;
    margin-left: -1rem;
  }
`;

export const ContainerPerfil = styled.div`
  width: 100%;

  padding-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    font-size: .85rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }

  button {
    border: none;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
  }
`;
