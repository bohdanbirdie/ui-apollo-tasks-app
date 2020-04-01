import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";

import { Task } from "../../generated/graphql";
import { TaskTag } from "../task-tag/TaskTag";

const { Paragraph, Text } = Typography;

const descriptionFallback = "Description is missing";

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => {

  return (
    <Card
      title={task.title}
      hoverable
      extra={<TaskTag task={task} />}
      actions={[
        <Text
          type="secondary"
          style={{ float: "right", padding: "0 25px", textAlign: "right" }}
        >
          Updated: {formatDistanceToNow(new Date(+task.updatedAt))}
        </Text>
      ]}
    >
      <Meta
        description={
          <Paragraph ellipsis={{ rows: 1, expandable: false }}>
            {task.description || descriptionFallback}
          </Paragraph>
        }
      />
    </Card>
  );
};
