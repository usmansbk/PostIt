import React from 'react';
import { NavLink } from 'react-router-dom';
import GroupCard from './GroupCard';
import NewGroupModal from './NewGroupModal';

export default ({groups}) => {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>
                 {"You don't belong to any group"}
               </h3>;
  let groupsComponent;
  if (groups) {
    groupsComponent = groups.map((group, index) => <NavLink to={`/dashboard/groups/${group.groupid}`} key={index}><GroupCard {...group} /></NavLink>);
  }
  return (
    <div className='row'>
      { groupsComponent || notice }
      <NewGroupModal />
    </div>
  );
}
