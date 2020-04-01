import React from "react";

import { withLayout } from "../../components/layout/Layout";
import { Tasks } from "../../components/tasks/Tasks";

export const DashboardPage = withLayout(() => {
  return (
    <Tasks />
  );
});
