import React from 'react';
import Icon from '../common/Icon.jsx';
import NotificationItem from '../common/NotificationItem.jsx';

export default function NotificationBoard(props) {
  const { notifications } = props;
  console.log(notifications);
  const notice = <h2 className='grey-text text-lighten-1 center-align'>All caught up!</h2>;
  let posts;
  if (notifications)
  posts = notifications.map((notification, index) => <NotificationItem notification={notification} key={index} />);
  return (
    <div className='col s12 m9 offset-m1'>
      <div className='row'>
        { posts || notice }
        <div className='fixed-action-btn'>
          <a className='btn-floating btn-large grey' >
            <Icon className='large white-text'>clear_all</Icon>
          </a>
        </div>
      </div>
    </div>
  );
}
