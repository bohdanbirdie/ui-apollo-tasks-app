import React from "react";
import { Switch } from "react-router-dom";

import { AuthPage } from "./pages/auth/AuthPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <Switch>
      <ProtectedRoute path="/auth" exact reverse>
        <AuthPage />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact>
        <DashboardPage />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
