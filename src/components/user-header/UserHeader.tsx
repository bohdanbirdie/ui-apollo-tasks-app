import React from "react";
import { Avatar } from "antd";

import { useMeQuery } from "../../generated/graphql";
import "./UserHeader.css";

export const UserHeader = () => {
  const { data, loading, error } = useMeQuery();

  return (
    <div className="user-header">
      <Avatar
        style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
        size="large"
        shape="square"
      >
        {data?.me.username}
      </Avatar>
    </div>
  );
};
