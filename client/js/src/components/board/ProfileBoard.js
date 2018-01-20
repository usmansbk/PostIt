import React from 'react';
import M from '../../../materialize';
import MessageBoard from '../../containers/MessageBoard';
import GroupsBoard from '../../containers/GroupsBoard';
import AccountBoard from '../../containers/AccountBoard';
import '../../../../stylesheets/sass/components/ProfileBoard.scss';

export default class ProfileBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.querySelector('.tabs');
    this.instance = M.Tabs.init(elem);
  }

  render() {
    const { account } = this.props;
    return (
      <div className='row'>
        <div className='col s12'>
          <AccountBoard {...account} />
        </div>
        <div className='col s12'>
          <ul id='tabs' className='tabs'>
            <li className='tab col s6'><a href='#posts'>Posts</a></li>
            <li className='tab col s6'><a href='#groups'>Groups</a></li>
          </ul>
          <div id='posts' className='col s12'>
            <MessageBoard />
          </div>
          <div id='groups' className='col s12'>
            <GroupsBoard />
          </div>
        </div>
      </div>
    );
  }
}
