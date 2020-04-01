import React, { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";

import { Task } from "../../generated/graphql";
import { TaskTag } from "../task-tag/TaskTag";
import { TaskModal } from "../task-modal/TaskModal";

const { Paragraph, Text } = Typography;

export const descriptionFallback = "Description is missing";

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Card
        title={task.title}
        hoverable
        extra={<TaskTag taskId={task.id} status={task.status} />}
        onClick={() => setModalVisible(true)}
        actions={[
          <Text
            type="secondary"
            style={{ float: "left", padding: "0 25px", textAlign: "right" }}
          >
            Updated {formatDistanceToNow(new Date(+task.updatedAt))}
          </Text>
        ]}
      >
        <Meta
          title="Description"
          description={
            <Paragraph ellipsis={{ rows: 1, expandable: false }}>
              {task.description || descriptionFallback}
            </Paragraph>
          }
        />
      </Card>
      <TaskModal
        task={task}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};
