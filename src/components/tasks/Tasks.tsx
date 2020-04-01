import React from "react";
import { Row, Col, Spin } from "antd";
import QueueAnim from "rc-queue-anim";

import { useGetTasksQuery, Task } from "../../generated/graphql";
import { TaskCard } from "../task-card/TaskCard";
import { AddTaskCard } from "../add-task-card/AddTaskCard";

export const Tasks = () => {
  const { data, loading } = useGetTasksQuery();

  const tasks: Task[] = (data?.tasks as Task[]) || [];

  return (
    <Spin tip="Loading..." spinning={loading} delay={200}>
      <QueueAnim
        delay={300}
        interval={30}
        duration={300}
        component={Row}
        componentProps={{ gutter: 16 }}
      >
        <Col span={6} style={{ padding: "10px" }}>
          <AddTaskCard />
        </Col>
        {tasks.map(task => (
          <Col span={6} style={{ padding: "10px" }} key={task.id}>
            <TaskCard task={task} />
          </Col>
        ))}
      </QueueAnim>
    </Spin>
  );
};
