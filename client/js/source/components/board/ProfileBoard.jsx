import React from 'react';
import M from '../../../materialize';
import MessageBoard from './MessageBoard.jsx';
import GroupsBoard from './GroupsBoard.jsx';
import AccountBoard from './AccountBoard.jsx';
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
    const { posts, groups, account } = this.props;
    return (
      <div className='row'>
        <div className='col s12'>
          <AccountBoard account={account} />
        </div>
        <div className='col s12'>
          <ul id='tabs' className='tabs'>
            <li className='tab col s6'><a href='#posts'>Posts</a></li>
            <li className='tab col s6'><a href='#groups'>Groups</a></li>
          </ul>
          <div id='posts' className='col s12'>
            <MessageBoard posts={posts} />
          </div>
          <div id='groups' className='col s12'>
            <GroupsBoard groups={groups} />
          </div>
          </div>
      </div>
    );
  }
}
