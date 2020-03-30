import React from "react";
import { Modal, Form, Input, Spin, Alert } from "antd";
import {
  useCreateTaskMutation,
  NewTaskInput,
  GetTasksQuery
} from "../../generated/graphql";
import { TASKS } from "../../graphql/server/queries";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

export const AddTaskModal: React.FC<{
  visible: boolean;
  onCancel: () => void;
  onFinish: () => void;
}> = ({ visible, onCancel, onFinish }) => {
  const [form] = Form.useForm();
  const [createTaskMutation, { loading, error }] = useCreateTaskMutation();

  const onOk = async () => {
    try {
      const {
        title,
        description
      } = (await form.validateFields()) as NewTaskInput;

      await createTaskMutation({
        variables: { newTaskData: { title, description } },
        update: (store, { data }) => {
          if (data?.addTask) {
            const queryData = store.readQuery<GetTasksQuery>({ query: TASKS });
            if (queryData?.tasks) {
              const tasks = [data.addTask, ...queryData?.tasks];

              store.writeQuery({ query: TASKS, data: { tasks } });
            }
          }
        }
      });

      form.resetFields();
      onFinish();
    } catch {}
  };

  return (
    <Modal
      title="Add task"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{ disabled: loading }}
      cancelButtonProps={{ disabled: loading }}
    >
      {error && (
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
      )}
      <Spin tip="Loading..." spinning={loading}>
        <Form {...layout} form={form} onFinish={onFinish}>
          <Form.Item
            label="Task Title"
            name="title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Task Description" name="description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
