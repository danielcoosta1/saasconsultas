// src/components/DashboardLayout/index.jsx

import { Outlet } from 'react-router-dom';
import { LayoutContainer, Content } from './style';
import SideBar from '../SideBar';

const DashboardLayout = () => {
  return (
    <LayoutContainer>
      <SideBar/>
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};

export default DashboardLayout;