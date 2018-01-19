import React from 'react';
import Icon from '../common/Icon';
import UserInfo from './UserInfo';

export default function GroupInfo({groupImage, groupName, discription, creator, membersCount}) {
  return (
    <div className='row'>
      <div className='col s12'>
	<div className='card' >
	  <div className='card-image'>
	    <img src={groupImage} />
            <a className='btn-floating halfway-fab waves-effect waves-light red'><Icon className='white-text'>edit</Icon></a>
	  </div>
	  <div className='card-content'>
	    <span className='card-title activator grey-text text-darken-4'>{groupName}<Icon className='right'>more_vert</Icon></span>
	    <UserInfo {...creator} />
	    <p><a href='#' className='grey-text text-darken-1'>{membersCount} Members</a></p>
	  </div>
	  <div className='card-reveal'>
	    <span className='card-title grey-text text-darken-4'>
       Purpose<Icon className='right'>close</Icon>
      </span>
      <p>{discription}</p>
    </div>
      </div>
    </div>
  </div>
  );
}
