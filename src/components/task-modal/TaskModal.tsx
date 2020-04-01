import React, { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Typography, Modal, Spin, Alert, Button, Row, Col, Space } from "antd";
import Meta from "antd/lib/card/Meta";

import {
  Task,
  useUpdateTaskDetailsMutation,
  useMeQuery
} from "../../generated/graphql";
import { TaskTag } from "../task-tag/TaskTag";
import { descriptionFallback } from "../task-card/TaskCard";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ShareTaskTag } from "../share-task-tag/ShareTaskTag";
import { TasksEventsTimeline } from "../tasks-events-timeline/TasksEventsTimeline";

const { Paragraph, Title, Text } = Typography;

export const TaskModal: React.FC<{
  task: Task;
  visible: boolean;
  onClose: () => void;
}> = ({ task, visible, onClose }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const { data: meData } = useMeQuery({ fetchPolicy: "cache-only" });
  const currentUserId = meData?.me.id || -1;

  const [
    updateTaskDetailsMutation,
    { loading, error }
  ] = useUpdateTaskDetailsMutation();

  const getAuthorName = () => {
    return task.author?.id === currentUserId ? "You, " : task.author?.username;
  };

  const onCancel = () => {
    if (newTitle || newDescription) {
      Modal.confirm({
        title: "Confirm",
        centered: true,
        icon: <ExclamationCircleOutlined />,
        content:
          "You haven't saved the modified fields. Would you link to discard the changes?",
        okText: "Discard",
        cancelText: "Cancel",
        onOk: () => {
          setNewTitle("");
          setNewDescription("");
          onClose();
        }
      });
    } else {
      onClose();
    }
  };

  const onSave = async () => {
    try {
      await updateTaskDetailsMutation({
        variables: {
          taskDetails: {
            taskId: task.id,
            title: newTitle || task.title,
            description: newDescription
          }
        }
      });
      setNewTitle("");
      setNewDescription("");
      onClose();
    } catch {}
  };

  return (
    <Modal
      centered
      width={700}
      bodyStyle={{ maxHeight: "80vh", overflow: "scroll" }}
      destroyOnClose
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            <Paragraph
              editable={{
                onChange: newValue => {
                  if (newValue) {
                    setNewTitle(newValue);
                  }
                }
              }}
              style={{ margin: 0 }}
            >
              {newTitle || task.title}
            </Paragraph>
          </Title>
          <TaskTag taskId={task.id} status={task.status} />
        </div>
      }
      footer={[
        <Text type="secondary" style={{ float: "left", margin: "5px" }}>
          Updated {formatDistanceToNow(new Date(+task.updatedAt))}
        </Text>,
        <Button key="cancel" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          disabled={loading || (!newDescription && !newTitle)}
          onClick={onSave}
        >
          Save
        </Button>
      ]}
      visible={visible}
      onCancel={onCancel}
      closable={false}
    >
      {error && (
        <Alert
          message="Error"
          description={error?.message}
          type="error"
          showIcon
          style={{ marginBottom: "15px" }}
        />
      )}
      <Spin tip="Loading..." spinning={loading} delay={100}>
        <Row>
          <Col span={14}>
            <Meta
              title="Author"
              description={
                <>
                  {getAuthorName()}
                  <ShareTaskTag task={task} />
                </>
              }
            />
            <Space direction="vertical" size={30}>
              <Meta
                title="Description"
                description={
                  <div style={{ paddingLeft: "15px" }}>
                    <Paragraph editable={{ onChange: setNewDescription }}>
                      {newDescription ||
                        task.description ||
                        descriptionFallback}
                    </Paragraph>
                  </div>
                }
              />
            </Space>
          </Col>
          <Col span={9} offset={1}>
            <Meta
              title="History"
              description={<TasksEventsTimeline task={task} />}
            />
          </Col>
        </Row>
      </Spin>
    </Modal>
  );
};
