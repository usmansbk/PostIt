import React from 'react';
import Avatar from './Avatar.jsx';
import '../../../../stylesheets/sass/components/UserInfo.scss';

export default function UserInfo(props) {
  return (
    <div id='userinfo' className='row valign-wrapper'>
      <Avatar id='avatar' url={props.url} className='col s3' />
      <div className='col s9'>
        <span>{ props.username || 'Username' }</span><br/>
        <span>{ props.email || 'Email address' }</span>
      </div>
    </div>
  );
}
