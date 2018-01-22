import React from 'react';
import Sidenav from './Sidenav';
import Sidepanel from './Sidepanel';
import PanelItem from './PanelItem';
import Footer from '../common/Footer';
import Navbar from '../../containers/Navbar';
import MessageBoard from '../../containers/MessageBoard';
import GroupsBoard from '../../containers/GroupsBoard';
import GroupBoard from '../../containers/GroupBoard';
import ProfileBoard from '../board/ProfileBoard';
import '../../../../stylesheets/sass/components/Dashboard.scss';

export default ({currentLocation, onClick}) => {
  let view;
  if (currentLocation === 'Group')
     view = <GroupBoard />
  else if (currentLocation === 'Groups')
    view = <GroupsBoard />
  else if (currentLocation === 'Profile')
    view = <ProfileBoard />
  else
    view = <MessageBoard />

  return (
  <div>
    <Navbar />
    <Sidenav />
    <div className='row'>
      <Sidepanel className='col m2 hide-on-med-and-down my-side-nav'>
        <div className='section' onClick={onClick}>
          <PanelItem icon='home' currentLocation={ currentLocation } label='Home' />
          <PanelItem icon='group' currentLocation={ currentLocation } label='Groups' />
          <PanelItem icon='account_circle' currentLocation={ currentLocation } label='Profile' />
        </div>
        <Footer className='nav-footer' />
      </Sidepanel>
        <div id='mainboard' className='col s12 m9 offset-m2 container'>
          { view }
        </div>
    </div>
  </div>)
}
