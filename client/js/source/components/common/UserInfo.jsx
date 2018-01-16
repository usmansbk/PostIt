import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/UserInfo.scss';

export default function UserInfo(props) {
	const account = props.account;
  return (
    <div id='userinfo' className='row valign-wrapper'>
			<div className='col s2'>
				<Icon className='large'>account_circle</Icon>
			</div>
      <div className='col s10'>
        <span>{ account.username || 'Username' }</span><br/>
        <span>{ account.email || 'Email address' }</span>
      </div>
    </div>
  );
}
