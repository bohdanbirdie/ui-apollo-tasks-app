import React, { useState } from "react";
import { Col, Card } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

import "./AddTaskCard.css";
import Title from "antd/lib/typography/Title";
import { AddTaskModal } from "../add-task-modal/AddTaskModal";

export const AddTaskCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Card
        className="add-task-container"
        onClick={() => setModalVisible(true)}
      >
        <PlusCircleTwoTone style={{ fontSize: "35px", color: "#08c" }} />
        <Title level={4}>Add Task</Title>
      </Card>
      <AddTaskModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onFinish={() => setModalVisible(false)}
      />
    </>
  );
};
