import React, { useState } from "react";

import {
  TaskStatus,
  useChangeTaskStatusMutation,
  GetTaskEventsDocument
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
  taskId: number;
  status: TaskStatus;
  clickable?: boolean;
}> = ({ taskId, status, clickable }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [error, setError] = useState<ApolloError | null>(null);
  const [changeTaskStatusMutation, { loading }] = useChangeTaskStatusMutation();

  const renderTag = (
    key: TaskStatus,
    onChangeSelect?: (status: TaskStatus) => void
  ) => {
    return (
      <Tag
        style={clickable ? { cursor: "pointer" } : {}}
        color={colorMap[key]}
        onClick={e => {
          e.stopPropagation();
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
          <Spin tip="Loading..." spinning={loading} delay={200}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {Object.keys(colorMap)
                .filter(key => key !== status)
                .map(key => (
                  <div style={{ margin: "5px" }} key={key}>
                    {renderTag(key as TaskStatus, async status => {
                      try {
                        const result = await changeTaskStatusMutation({
                          variables: {
                            changeTaskStatusInput: {
                              taskId: taskId,
                              status
                            },
                          },
                          refetchQueries: [{ query: GetTaskEventsDocument, variables: { taskId }}]
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
      visible={popoverVisible && clickable}
      onVisibleChange={setPopoverVisible}
      placement="bottomRight"
    >
      {renderTag(status)}
    </Popover>
  );
};

TaskTag.defaultProps = {
  clickable: true
};
