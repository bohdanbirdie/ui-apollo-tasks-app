import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useGetSessionQuery } from "../../generated/graphql";

export const ProtectedRoute = ({ children, reverse, ...rest }: any) => {
  const { data } = useGetSessionQuery();
  const history = useHistory();

  if (!data?.session) {
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  if (reverse) {
    history.goBack();
    return null;
  }

  return <Route {...rest}>{children}</Route>;
};
