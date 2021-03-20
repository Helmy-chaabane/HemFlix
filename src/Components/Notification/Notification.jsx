import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_NOTIFICATOIN } from "../../Redux/reducers/notifications";
import "./notification.scss";

const Notification = ({
  notification: {
    title: Title,
    id,
    duration,
    description: Description,
    icon: Icon,
  },
}) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(REMOVE_NOTIFICATOIN({ id }));
  }, duration * 1000 + 100);

  return (
    <div
      className="notification"
      style={{
        animation: `notification ${duration}s ease-out normal forwards`,
      }}
    >
      <Icon classname="notification__icon" />
      <div className="notification__content">
        <Title />
        <Description />
      </div>
    </div>
  );
};

export default Notification;
