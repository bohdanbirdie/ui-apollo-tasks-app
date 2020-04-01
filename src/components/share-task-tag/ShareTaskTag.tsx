import React, { useState } from "react";
import { Tag, Modal, Select, Button, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { ModalFunc } from "antd/lib/modal/confirm";

import {
  Task,
  useShareTaskMutation,
  useGetProfilesQuery,
  Profile,
  useMeQuery
} from "../../generated/graphql";
import { CountDownAlert } from "../countdown-alert/CountDownAlert";

const { Option } = Select;

const ModalContent: React.FC<{
  onSend: (id?: number) => void;
  loading: boolean;
  profiles: Profile[];
  time?: number;
}> = ({ onSend, loading, profiles }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

  return (
    <Spin tip="Loading..." spinning={loading} delay={200}>
      <Select
        autoFocus
        style={{ width: "90%" }}
        onChange={key => {
          if (key) {
            setSelectedUserId(+key);
          }
        }}
      >
        {profiles.map(profile => {
          return (
            <Option value={profile.id} key={profile.id}>
              {profile.username}
            </Option>
          );
        })}
      </Select>
      <Button
        type="primary"
        loading={loading}
        icon={<SendOutlined />}
        style={{ float: "right" }}
        disabled={!Boolean(selectedUserId && selectedUserId > 0)}
        onClick={() => {
          onSend(selectedUserId);
        }}
      />
    </Spin>
  );
};

export const ShareTaskTag: React.FC<{ task: Task }> = ({ task }) => {
  const [shareTaskMutation, { loading: shareLoading }] = useShareTaskMutation();
  const { data } = useGetProfilesQuery();
  const { data: meData } = useMeQuery({ fetchPolicy: "cache-only" });
  const currentUserId = meData?.me.id || -1;

  if (currentUserId !== task.author?.id) {
    return null;
  }

  const profiles = data?.profiles || [];

  const renderModalContent = (instance: ReturnType<ModalFunc>) => {
    return (
      <ModalContent
        onSend={userId => {
          onSend(instance, userId);
        }}
        loading={shareLoading}
        profiles={profiles}
      />
    );
  };

  const onSend = async (
    instance: ReturnType<ModalFunc>,
    shareWithId?: number
  ) => {
    if (!shareWithId) {
      return;
    }

    try {
      await shareTaskMutation({
        variables: {
          shareTaskInput: {
            taskId: task.id,
            shareWithId
          }
        }
      });

      if (instance) {
        instance.update({
          content: (
            <CountDownAlert
              message="Task shared!"
              onExpire={instance.destroy}
              startFromSeconds={5}
              onAfterClose={() => {
                instance.update({
                  content: renderModalContent(instance)
                });
              }}
            />
          )
        });
      }
    } catch {}
  };

  const onShareClick = () => {
    const instance = Modal.info({
      title: "Select User to share",
      centered: true,
      icon: null,
      okText: "Close"
    });

    instance.update({ content: renderModalContent(instance) });
  };

  return (
    <Tag
      icon={<SendOutlined />}
      onClick={e => {
        e.stopPropagation();
        onShareClick();
      }}
      style={{ cursor: "pointer", margin: "5px" }}
    >
      Share Task
    </Tag>
  );
};
