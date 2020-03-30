import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useGetSessionQuery } from "../../generated/graphql";

export const ProtectedRoute = ({ children, ...rest }: any) => {
  const { data } = useGetSessionQuery({ fetchPolicy: 'cache-only' });
  const match = useRouteMatch("/auth");

  if (!data?.session && !match) {
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  return <Route {...rest}>{children}</Route>;
};
