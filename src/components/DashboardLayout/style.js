// src/components/DashboardLayout/style.js
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.large};
`;

export const Content = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
`;