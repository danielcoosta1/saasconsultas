// src/components/style.js
import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 250px;

  background-color: ${({ theme }) => theme.colors.sidebarbg};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.large};

 ul{
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
  margin-left:-2rem;

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





