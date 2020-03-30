import React, { ReactElement, ComponentType } from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { NavLink, useLocation } from 'react-router-dom';

import './Layout.css';

const { Header, Content, Footer } = AntdLayout;


export const withLayout = <P extends object>(Component: ComponentType<P>) => (
  props: P
): ReactElement => {
  let location = useLocation();

  return (
    <AntdLayout className="layout" style={{height:"100vh"}}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <NavLink to="/" className="nav-text">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/auth">
            <NavLink to="/auth" className="nav-text">
              Login
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Component {...props} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </AntdLayout>
  );
};
