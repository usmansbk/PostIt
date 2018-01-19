import React from 'react';
import UserInfo from './UserInfo';

export default function GroupCard({ groupImage, groupName, membersCount, onClick }) {
  return (
    <div className='col s12 m6 l3' onClick={ onClick() }>
      <div className='card small hoverable'>
        <div className='card-image'>
          <img src={groupImage} />
        </div>
        <div className='card-content'>
          <span className='card-title truncate'>{groupName}</span>
	  <p className='grey-text text-darken-1'>{membersCount} Members</p>
        </div>
      </div>
    </div>
  );
}
