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
    let location;
    switch(this.props.location) {
      case 'home':
        location = <MessageBoard>this.props.posts</MessageBoard>
        break;
      case 'groups':
        location = <GroupsBoard>this.props.groups</GroupsBoard>
        break;
      default:
        location = <MessageBoard />
        break;
     }
    return (
    <div>
      <Navbar location={this.props.location}
      result={this.props.result}
      notifications={this.props.notifications}
      account={this.props.account}
      className='navbar-fixed'
      color='white' />
      <Sidenav />
      <div className='row'>
        <Sidepanel className='col m2 hide-on-med-and-down my-side-nav'>
          <div className='section'>
            <PanelItem icon='home' location={this.props.location} label='Home' />
            <PanelItem icon='group' location={this.props.location} label='Groups' />
            <PanelItem icon='account_circle' location={this.props.location} label='Profile' />
            <PanelItem icon='notifications' location={this.props.location} label='Notifications' />
          </div>
          <div className='divider'></div>
          <div className='section'>
            <PanelItem className='my-nav-subitem' label='Report an issue' />
            <PanelItem className='my-nav-subitem' label='Help' />
          </div>
          <Footer className='nav-footer' />
        </Sidepanel>
        <div className='col s12 m7 offset-m3'>
          { location }
        </div>
      </div>
    </div>)
  }
}
