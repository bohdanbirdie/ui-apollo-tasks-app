import React from "react";
import { useTimer } from "react-timer-hook";
import { Alert } from "antd";

export const CountDownAlert: React.FC<{
  onAfterClose: VoidFunction;
  onExpire: VoidFunction;
  startFromSeconds: number;
  message: string;
}> = ({ onAfterClose, onExpire, startFromSeconds, message }) => {
  const { seconds } = useTimer({
    expiryTimestamp: new Date().getTime() + startFromSeconds * 1000,
    onExpire: onExpire
  });

  return (
    <Alert
      message={message}
      description={`Closing in ${seconds}s`}
      type="success"
      showIcon
      closeText="Share again"
      afterClose={onAfterClose}
    />
  );
};
