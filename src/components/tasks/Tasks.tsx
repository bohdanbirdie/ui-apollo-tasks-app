import React from "react";
import { Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { useGetTasksQuery, Task } from "../../generated/graphql";
import { TaskCard } from "../task-card/TaskCard";
import { AddTaskCard } from "../add-task-card/AddTaskCard";

export const Tasks = () => {
  const { data } = useGetTasksQuery({
    fetchPolicy: "cache-first"
  });

  const tasks: Task[] = (data?.tasks as Task[]) || [];

  return (
    <QueueAnim
      delay={300}
      interval={30}
      duration={300}
      component={Row}
      componentProps={{ gutter: 16 }}
      forcedReplay
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
  );
};
