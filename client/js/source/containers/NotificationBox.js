import React from 'react';
import NotificationBox from '../components/dashboard/NotificationBox';

export default class NotificationBoxContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const notifications = [
  		{
  			message: 'Urgent message from Veromoda',
  			duration: '5',
  			groupName: 'H2o',
  			groupImage: '../../../../images/group.png'
  		}
  	];
    return <NotificationBox notifications={notifications} />
  }
}
