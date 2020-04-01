import React, { useState } from "react";

import {
  TaskStatus,
  Task,
  useChangeTaskStatusMutation
} from "../../generated/graphql";
import { Tag, Popover, Spin, Result, Alert } from "antd";
import { ApolloError } from "apollo-boost";

const colorMap: { [key in TaskStatus]: string } = {
  [TaskStatus.READY]: "default",
  [TaskStatus.IN_PROGRESS]: "processing",
  [TaskStatus.DONE]: "success",
  [TaskStatus.REJECTED]: "error"
};

const titleMap: { [key in TaskStatus]: string } = {
  [TaskStatus.READY]: "Ready",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.DONE]: "Done",
  [TaskStatus.REJECTED]: "Rejected"
};

export const TaskTag: React.FC<{
  task: Task;
}> = ({ task }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [error, setError] = useState<ApolloError | null>(null);
  const [changeTaskStatusMutation, { loading }] = useChangeTaskStatusMutation();

  const renderTag = (
    key: TaskStatus,
    onChangeSelect?: (status: TaskStatus) => void
  ) => {
    return (
      <Tag
        style={{ width: "100%", cursor: 'pointer' }}
        color={colorMap[key]}
        onClick={() => {
          onChangeSelect && onChangeSelect(key);
        }}
      >
        {titleMap[key]}
      </Tag>
    );
  };

  return (
    <Popover
      content={
        error ? (
          <Alert
            message={error.message}
            type="error"
            showIcon
            closable
            onClose={() => setError(null)}
          />
        ) : (
          <Spin tip="Loading..." spinning={loading}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {Object.keys(colorMap)
                .filter(key => key !== task.status)
                .map(key => (
                  <div style={{ margin: "5px" }} key={key}>
                    {renderTag(key as TaskStatus, async status => {
                      try {
                        const result = await changeTaskStatusMutation({
                          variables: {
                            changeTaskStatusInput: {
                              taskId: task.id,
                              status
                            }
                          }
                        });

                        if (!result?.errors) {
                          setPopoverVisible(false);
                        }
                      } catch (e) {
                        setError(e);
                      }
                    })}
                  </div>
                ))}
            </div>
          </Spin>
        )
      }
      title="Change status"
      trigger="click"
      visible={popoverVisible}
      onVisibleChange={setPopoverVisible}
      placement="bottomRight"
    >
      {renderTag(task.status)}
    </Popover>
  );
};
