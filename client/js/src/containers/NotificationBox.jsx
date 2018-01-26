import React from 'react';
import { connect } from 'react-redux';
import NotificationBox from '../components/dashboard/NotificationBox';
import { defaultGroupImage } from '../helpers/constants';
import { getElapsedTime } from '../helpers/utils';
import { setPage, setGroup } from '../redux/actionTypes';


const getNotifications = (notifications, groups) => {
  return notifications.map(notification => {
    const id = notification.groupId;
    const duration = getElapsedTime(notification.createdAt);
    const message = notification.message;
    const group = groups.byId[id];
    const groupName = group.name;

    return {
      message,
      groupName,
      groupImage,
      duration,
      groupId: id
    }
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      const target = event.currentTarget;
      const id = target.getAttribute('gid');
      dispatch(setPage('Group'));
      dispatch(setGroup(id));
    }
  }
}

const mapStateToProps = state => {
  return {
    notifications: getNotifications(state.notifications, state.groups)
  }
}

const NotificationBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationBox)

export default NotificationBoxContainer; 