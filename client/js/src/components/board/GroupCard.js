import React from 'react';
import Icon from '../common/Icon';

export default ({ groupImage, groupName, membersCount, isOwner, onClick, groupid}) => {
  const card = {
    height: 'auto'
  };

  return (
    <div className='col s12 m6 l3' onClick={onClick} groupid={groupid}>
      <div className='card small hoverable' style={card}>
        <div className='card-image'>
          <img src={groupImage} groupid={groupid} />
        </div>
        <div className='card-content'>
          <span className='card-title truncate'>{groupName}</span>
	        <p className='grey-text text-darken-1'>{membersCount}</p>
          <a href='#'><Icon title={isOwner?'Delete':'Leave'}>{
            isOwner?'delete':'exit_to_app'
          }</Icon></a>
        </div>
      </div>
    </div>
  );
}
