import React, { ReactElement, ComponentType } from "react";
import { Layout as AntdLayout, Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";

import { useLogoutMutation } from "../../generated/graphql";
import { UserHeader } from "../user-header/UserHeader";

import "./Layout.css";

const { Header, Content } = AntdLayout;

export const withLayout = <P extends object>(Component: ComponentType<P>) => (
  props: P
): ReactElement => {
  const location = useLocation();
  const [logoutMutation] = useLogoutMutation();

  return (
    <AntdLayout className="layout" style={{ minHeight: "100vh" }}>
      <Header>
        <UserHeader />
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" style={{ float: "left" }}>
            <NavLink to="/" className="nav-text">
              My tasks
            </NavLink>
          </Menu.Item>

          <Menu.Item key="/shared-tasks" style={{ float: "left" }}>
            <NavLink to="/shared-tasks" className="nav-text">
              Shared Tasks
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
    </AntdLayout>
  );
};
