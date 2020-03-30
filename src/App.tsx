import React from "react";
import { Switch } from "react-router-dom";

import { AuthPage } from "./pages/auth/AuthPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { LoggedOutOnlyRoute } from "./components/protected-route/LoggedOutOnlyRoute";

function App() {
  return (
    <Switch>
      <LoggedOutOnlyRoute path="/auth" exact reverse>
        <AuthPage />
      </LoggedOutOnlyRoute>
      <ProtectedRoute path="/" exact>
        <DashboardPage />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
