import React from 'react';
import Icon from '../common/Icon.jsx';

export default function AccountBoard(props) {
  const { username, email } = props.account;
  return (
    <div className='center-align grey-text'>
      <Icon className='large'>account_circle</Icon>
      <p className='flow-text'>{username}</p>
      <p className='flow-text'>{email}</p>
    </div>
  );
}
