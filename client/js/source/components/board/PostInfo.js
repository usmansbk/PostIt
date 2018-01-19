import React from 'react';
import Icon from '../common/Icon';

export default ({authorUsername, groupName, duration, userAvatar}) => {
  return (
    <div className='row valign-wrapper'>
      <div className='col s2'>
        <img src={userAvatar} alt='' className='circle responsive-img' />
      </div>
      <div className='col s10 valign-wrapper'>
        <span> {authorUsername} </span>
        <Icon className='tiny grey-text'>play_arrow</Icon>
        <span className='blue-text truncate'><a href='#'>{groupName}</a></span>
        <Icon className='tiny'>access_time</Icon>
        <small><span className='grey-text right'>{duration}</span></small>
      </div>
    </div>
  );
}
