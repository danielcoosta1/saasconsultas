
import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.sidebarbg};
  
  color: #fff;
  padding: ${({ theme }) => theme.spacing.large};
`;
