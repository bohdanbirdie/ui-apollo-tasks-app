import React from "react";
import {  Row, Col } from "antd";
import { useGetTasksQuery, Task } from "../../generated/graphql";
import { TaskCard } from "../task-card/TaskCard";
import { AddTaskCard } from "../add-task-card/AddTaskCard";

export const Tasks = () => {
  const { data, loading, error } = useGetTasksQuery({ fetchPolicy: 'cache-first' });

  const tasks: Task[] = (data?.tasks as Task[]) || [];

  return (
    <Row gutter={16}>
      <AddTaskCard />
      {tasks.map(task => (
        <Col span={6} style={{ padding: "10px" }}>
          <TaskCard task={task} />
        </Col>
      ))}
    </Row>
  );
};
