import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/UserInfo.scss';

export default function UserInfo(props) {
	const account = props.account;
  return (
    <div id='userinfo' className='row valign-wrapper'>
      <Icon id='avatar' className='grey-text col s2'>account_circle</Icon>
      <div id='info' className='col s10 grey-text'>
        <p>{ account.username || 'Username' }</p>
        <p>{ account.email || 'Email address' }</p>
      </div>
    </div>
  );
}
