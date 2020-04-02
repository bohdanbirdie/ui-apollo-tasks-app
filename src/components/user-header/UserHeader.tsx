import React from "react";
import { Avatar, Spin } from "antd";

import { useMeQuery } from "../../generated/graphql";

import "./UserHeader.css";

export const UserHeader = () => {
  const { data, loading } = useMeQuery();

  return (
    <div className="user-header">
      <Avatar
        style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
        size="large"
        shape="square"
      >
        <Spin tip="Loading..." spinning={loading} delay={200}>
          {data?.me.username}
        </Spin>
      </Avatar>
    </div>
  );
};
