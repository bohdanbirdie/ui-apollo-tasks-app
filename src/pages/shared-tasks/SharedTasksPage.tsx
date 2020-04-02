import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col, Empty, Spin } from "antd";

import { withLayout } from "../../components/layout/Layout";
import { useGetSharedTasksQuery, Task } from "../../generated/graphql";
import { TaskCard } from "../../components/task-card/TaskCard";

export const SharedTasksPage = withLayout(() => {
  const { data, loading } = useGetSharedTasksQuery();
  const tasks: Task[] = (data?.sharedTasks as Task[]) || [];

  return (
    <Spin tip="Loading..." spinning={loading} delay={200}>
      <QueueAnim
        delay={300}
        interval={30}
        duration={300}
        component={Row}
        componentProps={{ gutter: 16 }}
      >
        {tasks.map(task => (
          <Col span={6} style={{ padding: "10px" }} key={task.id}>
            <TaskCard task={task} />
          </Col>
        ))}
        {tasks.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "400px"
            }}
          >
            <Empty
              imageStyle={{
                height: 120
              }}
              description="There are no tasks shared with you yet."
            />
          </div>
        )}
      </QueueAnim>
    </Spin>
  );
});
