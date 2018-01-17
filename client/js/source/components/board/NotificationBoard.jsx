import React from 'react';
import Icon from '../common/Icon.jsx';

export default function NotificationBoard(props) {
  const notifications = { props };
  const notice = <h2 className='grey-text text-lighten-1 center-align'>No new notification</h2>;
  const header = <div className='row valign-wrapper'>
                  <div className='col s10 valign-wrapper'>
                    <h6>Notifications</h6>
		  </div>
		  <div className='col s2'>
		    <Icon>clear_all</Icon>
		  </div>
		</div>; 
  return (
    <div>
      <div className='card-panel'>
        { header }
      </div>
      { notice }
    </div>
  );
}
