import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PostInfo.scss'

export default ({authorUsername, groupName, duration, groupId, onClick}) => {

  const div = {
    width: '100%',
    padding: '0'
  }

  const div2 = {
    padding: '0'
  }

  return (
    <div className='row valign-wrapper' id='post-info'>
      <div className='col s12 valign-wrapper' id='post-detail' style={div2}>
        <span id='author-username'> {authorUsername} </span>
        <Icon className='tiny grey-text'>play_arrow</Icon>
        <div>
          <NavLink to={`/dashboard/groups/${groupId}`}><span className='blue-text truncate' onClick={onClick} gid={groupId}>{groupName}</span></NavLink>
        </div>
        <div id='duration-div' style={div}>
          <div className='right valign-wrapper'>
            <Icon className='tiny'>access_time</Icon>
            <small><span className='grey-text'>{duration}</span></small>
          </div>
        </div>
      </div>
    </div>
  );
}
