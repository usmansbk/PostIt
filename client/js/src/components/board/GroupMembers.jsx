import React from 'react';
import M from '../../../materialize';
import MemberListItem from './MemberListItem';

export default ({members, handleRemove, failedToRemove, removeUser, removedUser, isAdmin}) => {
  if (removedUser) {
    M.toast({html: 'User removed', classes: 'rounded'});
  }
  let header = <h5 className='grey-text text-darken-2'>Members</h5>;
  let membersComponent = members.map((member, index) => {
    return <MemberListItem
    isAdmin={isAdmin}
    failedToRemove={failedToRemove}
    removeUser={removeUser}
    onClick={handleRemove}
    member={member}
    key={index} />
  })
  return (
    <div id='members' className='modal'>
      <div className='modal-content'>
        { header }
        { membersComponent }
      </div>
    </div>
  );
} 