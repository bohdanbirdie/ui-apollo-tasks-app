import React from "react";

import { withLayout } from "../../components/layout/Layout";
import { useGetSharedTasksQuery, Task } from "../../generated/graphql";
import { Row, Col } from "antd";
import { TaskCard } from "../../components/task-card/TaskCard";

export const SharedTasksPage = withLayout(() => {
  const { data, loading, error } = useGetSharedTasksQuery();
  const tasks: Task[] = (data?.sharedTasks as Task[]) || [];

  return (
    <Row gutter={16}>
      {tasks.map(task => (
        <Col span={6} style={{ padding: "10px" }} key={task.id}>
          <TaskCard task={task} />
        </Col>
      ))}
    </Row>
  );
});
