import React from 'react';
import Icon from './Icon.jsx';


export default function UserInfo(props) {
	const { account, img } = props;
  return (
    <div id='userinfo' className='row valign-wrapper'>
			<div className='col s2'>
				<img src={img} alt='' className='circle responsive-img' />
      </div>
      <div id='info' className='col s10 grey-text'>
        <p>{ account.username || 'Username' }</p>
        <p>{ account.email || 'Email address' }</p>
      </div>
    </div>
  );
}
