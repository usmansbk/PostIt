import React from 'react';
import { connect } from 'react-redux';
import NotificationBox from '../components/dashboard/NotificationBox';
import { defaultGroupImage } from '../Constants';
import { getElapsedTime } from '../Util';


const getNotifications = (notifications, groups) => {
  if (!notifications) return notifications;
  return notifications.map(notification => {
    const id = notification.groupId;
    const duration = getElapsedTime(notification.createdAt);
    const message = notification.message;
    const group = groups.byId[id];
    const groupName = group.name;
    const groupImage = group.image || defaultGroupImage;

    return {
      message,
      groupName,
      groupImage,
      duration
    }
  });
};

const mapStateToProps = state => {
  return {
    notifications: getNotifications(state.notifications, state.groups)
  }
}

const NotificationBoxContainer = connect(
  mapStateToProps
)(NotificationBox)

export default NotificationBoxContainer; 