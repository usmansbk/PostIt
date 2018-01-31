import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';

export default ({ groupName, author, membersCount, groupid, isOwner, onClick }) => {
  const card = {
    height: '140px'
  };

  return (
    <div className='col s12 m6 l4'>
      <div className='card small hoverable' style={card}>
        <div className='card-content'>
          <span className='card-title truncate' title={groupName}>{groupName}</span>
          <small><p className='grey-text truncate' title={`created by ${author}`}>created by <span className='grey-text text-darken-2'>{author}</span></p></small>
          <small><p className='grey-text text-lighten-1'>{membersCount} Member{membersCount > 1?'s':''}</p></small>
          {
            isOwner &&
            <Icon
            title='Close group'
            className='red-text text-lighten-1 right'
            name={groupName}
            id={groupid}
            onClick={onClick}>delete</Icon>
          }
        </div>
      </div>
    </div>
  );
}
 