import React from 'react';
import Icon from '../common/Icon';
import Loader from '../common/Loader';
import '../../../../stylesheets/sass/components/SearchItem.scss'

export default ({ username, isMember, page, canAdmin, gid, onClick, add, addFailed}) => {
  return (
    <div className='row card-panel' id='search-item' >
      <div className='col s12'>
        <div className='row'>
          <div className='col s6 valign-wrapper'>
            <Icon className='grey-text text-darken-2'>account_box</Icon>
            <span className='grey-text text-darken-2'>{username}</span>
          </div>
          {
            (page === 'Group' && canAdmin && !isMember) &&
            <div className='col s6'>
            {
              add && !addFailed ?
                <Loader />
              :
              <span title='Add user to this group'>
              <Icon className='green-text right' gid={gid} username={username} onClick={onClick}>add</Icon>
              </span>
            }
            </div>
          }
        </div>
      </div>
    </div>
  );
}