import React, { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Timeline, Typography, Button, Spin } from "antd";
import QueueAnim from "rc-queue-anim";

import {
  Task,
  useGetTaskEventsQuery,
  TaskStatus,
  useMeQuery,
  User,
  TaskStatusHistoryEvent
} from "../../generated/graphql";
import { TaskTag } from "../task-tag/TaskTag";
import { ArrowDownOutlined } from "@ant-design/icons";

const colorMap: { [key in TaskStatus]: string } = {
  [TaskStatus.READY]: "gray",
  [TaskStatus.IN_PROGRESS]: "blue",
  [TaskStatus.DONE]: "green",
  [TaskStatus.REJECTED]: "red"
};

const { Text } = Typography;

export const TasksEventsTimeline: React.FC<{ task: Task }> = ({ task }) => {
  const [showEvents, setShowEvents] = useState(5);
  const { data, loading, error } = useGetTaskEventsQuery({
    variables: { taskId: task.id }
  });
  const { data: meData } = useMeQuery({ fetchPolicy: "cache-only" });
  const currentUserId = meData?.me.id || -1;

  const events = data?.taskEvents || [];

  const getCreatedRow = ({ user, createdAt }: TaskStatusHistoryEvent) => {
    const username = user.id === currentUserId ? "You" : user.username;
    const when = formatDistanceToNow(new Date(+createdAt));

    return `${username}, ${when}`;
  };

  return (
    <Spin tip="Loading..." spinning={loading} delay={200}>
      <QueueAnim
        delay={200}
        interval={20}
        duration={250}
        component={Timeline}
        componentProps={{ gutter: 16 }}
        forcedReplay
      >
        {events
          .filter((_, index) => {
            return index + 1 < showEvents;
          })
          .map((event, index) => {
            return index === events.length - 1 ? (
              <Timeline.Item color={colorMap[event.status]} key={event.id}>
                <Text>Created</Text>
                <br />
                <Text type="secondary">
                  {getCreatedRow(event as TaskStatusHistoryEvent)}
                </Text>
              </Timeline.Item>
            ) : (
              <Timeline.Item color={colorMap[event.status]} key={event.id}>
                <Text>
                  Changed to{" "}
                  <TaskTag
                    taskId={event.taskId}
                    status={event.status}
                    clickable={false}
                  />
                </Text>
                <br />
                <Text type="secondary">
                  {getCreatedRow(event as TaskStatusHistoryEvent)}
                </Text>
              </Timeline.Item>
            );
          })}
        {showEvents < events.length + 1 && (
          <Timeline.Item dot={<ArrowDownOutlined />}>
            <Button type="dashed" onClick={() => setShowEvents(showEvents + 5)}>
              Show more
            </Button>
          </Timeline.Item>
        )}
      </QueueAnim>
    </Spin>
  );
};
