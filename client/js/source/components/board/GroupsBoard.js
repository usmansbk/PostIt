import React from 'react';
import GroupCard from './GroupCard';
import Icon from '../common/Icon';

export default function GroupsBoard({groups}) {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>
                 You don't belong to any group
               </h3>;
  let groupsComponent;
  if (groups) {
    groupsComponent = groups.map((group, index) => <GroupCard key={index} {...group} />);
  }
  return (
    <div className='row'>
      { groupsComponent || notice }
    </div>
  );
}
