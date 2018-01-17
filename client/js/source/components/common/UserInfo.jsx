import React from 'react';
import Icon from './Icon.jsx';

const url = '../../../../images/default.jpg';

export default function UserInfo(props) {
	const account = props.account;
  return (
    <div id='userinfo' className='row valign-wrapper'>
			<div className='col s2'>
				<img src={url} alt='' className='circle responsive-img' />
      </div>
      <div id='info' className='col s10 grey-text'>
        <p>{ account.username || 'Username' }</p>
        <p>{ account.email || 'Email address' }</p>
      </div>
    </div>
  );
}
