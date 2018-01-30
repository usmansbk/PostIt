  import React from 'react';
import { NavLink } from 'react-router-dom';
import GroupCard from './GroupCard';
import NewGroupModal from '../../containers/NewGroupModal';

export default ({ groups, match }) => {
  const notice = <h3 className='grey-text text-lighten-1 center-align'>
                  Create a group and add users
               </h3>;
  let groupsComponent = groups.map((group, index) => <NavLink to={`${match.path}/${group.groupid}`} key={index}><GroupCard {...group} /></NavLink>);

  return (
    <div className='row'>
      { groups.length > 0 ? groupsComponent : notice}
      <NewGroupModal />
    </div>
  );
}
