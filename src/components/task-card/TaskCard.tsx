import React from "react";
import { Card } from "antd";

import { Task } from "../../generated/graphql";
import { TaskTag } from "../task-tag/TaskTag";

const descriptionFallback = "Description is missing";

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Card
      title={task.title}
      extra={<TaskTag task={task} />}
      actions={[<div></div>]}
    >
      {task.description || descriptionFallback}
    </Card>
  );
};
