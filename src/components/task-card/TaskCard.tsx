import React from "react";
import { Card } from "antd";

import { Task } from "../../generated/graphql";

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Card title={task.title}>
      {task.description}
    </Card>
  );
};
