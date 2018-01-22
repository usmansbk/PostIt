import React from 'react';
import GroupCard from './GroupCard';
import NewGroupModal from './NewGroupModal';

export default ({groups, onClick}) => {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>
                 You dont belong to any group
               </h3>;
  let groupsComponent;
  if (groups) {
    groupsComponent = groups.map((group, index) => <GroupCard key={index} {...group} onClick={onClick}/>);
  }
  return (
    <div className='row'>
      { groupsComponent || notice }
      <NewGroupModal />
    </div>
  );
}
