import React, { ReactElement, ComponentType } from "react";
import { Layout as AntdLayout, Menu, Button, Row, Col } from "antd";
import { NavLink, useLocation } from "react-router-dom";

import "./Layout.css";
import { useLogoutMutation } from "../../generated/graphql";

const { Header, Content, Footer } = AntdLayout;

export const withLayout = <P extends object>(Component: ComponentType<P>) => (
  props: P
): ReactElement => {
  const location = useLocation();
  const [logoutMutation] = useLogoutMutation();

  return (
    <AntdLayout className="layout" style={{ height: "100vh" }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" style={{ float: "left" }}>
            <NavLink to="/" className="nav-text">
              Dashboard
            </NavLink>
          </Menu.Item>

          <Menu.Item style={{ float: "right" }}>
            <Button type="danger" onClick={() => logoutMutation()}>
              Logout
            </Button>
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
