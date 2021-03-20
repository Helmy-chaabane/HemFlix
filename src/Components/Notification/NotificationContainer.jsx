import React from "react";
import { useSelector } from "react-redux";
import { getNotifications } from "../../Redux/selectors/notification";
import Notification from "./Notification";

const NotificationContainer = () => {
  const notifications = useSelector(getNotifications);

  return (
    <div className="notification__container">
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </div>
  );
};

export default NotificationContainer;
