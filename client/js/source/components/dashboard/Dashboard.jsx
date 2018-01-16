import React from 'react';
import Navbar from './Navbar.jsx';
import Sidenav from './Sidenav.jsx';
import Sidepanel from './Sidepanel.jsx';
import PanelItem from '../common/PanelItem.jsx';
import Footer from '../common/Footer.jsx';
import MessageBoard from '../board/MessageBoard.jsx';
import GroupsBoard from '../board/GroupsBoard.jsx';
import PostCard from '../board/PostCard.jsx';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let view;
    const { location, posts, groups } = this.props;
    console.log(posts);
    if (location === 'Group')
       view = <MessageBoard posts={ posts } />
    else if (location === 'Groups')
      view = <GroupsBoard groups={ groups } />
    else if (location === 'Profile')
      view = <ProfileBoard account={ account } posts={ posts } groups={ groups }/>
    else if (location === 'Notification')
      view = <NotificationBoard notifications={notifications} />
    else
      view = <MessageBoard posts={ posts } />

    return (
    <div>
      <Navbar location={ this.props.location }
      search={ this.props.search }
      notifications={ this.props.notifications }
      account={ this.props.account }/>
      <Sidenav />
      <div className='row'>
        <Sidepanel className='col m2 hide-on-small-only my-side-nav'>
          <div className='section'>
            <PanelItem icon='home' location={ this.props.location } label='Home' />
            <PanelItem icon='group' location={ this.props.location } label='Groups' />
            <PanelItem icon='account_circle' location={ this.props.location } label='Profile' />
            <PanelItem icon='notifications' location={ this.props.location } label='Notifications' />
          </div>
          <div className='divider'></div>
          <div className='section'>
            <PanelItem className='my-nav-subitem' label='Report an issue' />
            <PanelItem className='my-nav-subitem' label='Help' />
          </div>
          <Footer className='nav-footer' />
        </Sidepanel>
          <div className='col s12 m9 offset-m3'>
            { view }
          </div>
      </div>
    </div>)
  }
}
