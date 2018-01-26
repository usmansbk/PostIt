import React from 'react';
import Icon from '../common/Icon';

export default ({ groupName, groupid, onClick}) => {
  const card = {
    height: 'auto'
  };

  return (
    <div className='col s12 m6 l3' onClick={onClick} gid={groupid}>
      <div className='card small hoverable' style={card}>
        <div className='card-content'>
          <span className='card-title truncate'>{groupName}</span>
        </div>
      </div>
    </div>
  );
}
