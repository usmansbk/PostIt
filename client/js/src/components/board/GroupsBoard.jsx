  import React from 'react';
import { NavLink } from 'react-router-dom';
import GroupCard from './GroupCard';
import M from '../../../materialize';
import NewGroupModal from '../../containers/NewGroupModal';

export default class GroupsBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { deleted, failed } = nextProps;
    if (deleted) {
      M.toast({html: 'Group deleted', classes: 'rounded'})
    }
    if (failed) {
      M.toast({html: 'Failed to delete group', classes: 'rounded'})
    }
  }
  
  render() {
    const { groups, match, handleCloseGroup } = this.props;
    const notice = <h3 className='grey-text text-lighten-1 center-align'>
                    Create a group and add users
                 </h3>;
    let groupsComponent = groups.map((group, index) => <NavLink to={`${match.path}/${group.groupid}`} key={index}><GroupCard {...group} onClick={handleCloseGroup}/></NavLink>);

    return (
      <div className='row'>
        { groups.length > 0 ? groupsComponent : notice}
        <NewGroupModal />
      </div>
    );
  }
}
