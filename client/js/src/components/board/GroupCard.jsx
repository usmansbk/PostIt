import React from 'react';
import Icon from '../common/Icon';

export default ({ groupName, author, membersCount, groupid, onClick}) => {
  const card = {
    height: 'auto'
  };

  return (
    <div className='col s12 m6 l3' onClick={onClick} gid={groupid}>
      <div className='card small hoverable' style={card}>
        <div className='card-content'>
          <span className='card-title truncate' title={groupName}>{groupName}</span>
          <span><p className='grey-text truncate' title={author}>created by <span className='grey-text text-darken-2'>{author}</span></p></span>
          <small><p className='grey-text text-lighten-1'>{membersCount} Member{membersCount > 1?'s':''}</p></small>
        </div>
      </div>
    </div>
  );
}
