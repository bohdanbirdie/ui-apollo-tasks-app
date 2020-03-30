import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useGetSessionQuery } from "../../generated/graphql";

export const LoggedOutOnlyRoute = ({ children, ...rest }: any) => {
  const { data } = useGetSessionQuery();

  if (data?.session) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <Route {...rest}>{children}</Route>;
};
