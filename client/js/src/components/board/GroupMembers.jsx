import React from 'react';
import MemberListItem from './MemberListItem';

export default ({members, handleRemove}) => {
  let header = <h5 className='grey-text text-darken-2'>Members</h5>;
  let membersComponent = members.map((member, index) => <MemberListItem onClick={handleRemove} member={member} key={index} />);
  return (
    <div id='members' className='modal'>
      <div className='modal-content'>
        { header }
        { membersComponent }
      </div>
    </div>
  );
} 