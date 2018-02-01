import React from 'react';
import UserInfo from './UserInfo';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/MemberListItem.scss';

export default ({member, isAdmin, onClick, ...rest}) => {
      return (<div className='row member-list-item'>
      <div className='col s8'>
        <UserInfo {...member} />
      </div>
      <div className='col s4'>
        <a
        href='#'
        onClick={onClick}
        uid={member.id}
        guid={member.guid}>
        <Icon
        className='right red-text text-lighten-1'
        title='Remove user'>clear</Icon></a>
      </div>
    </div>)
}