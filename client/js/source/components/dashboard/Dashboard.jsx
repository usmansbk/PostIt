import React from 'react';
import Navbar from './Navbar.jsx';
import Sidenav from './Sidenav.jsx';
import Sidepanel from './Sidepanel.jsx';
import PanelItem from '../common/PanelItem.jsx';
import Footer from '../common/Footer.jsx';

export default function Dashboard(props) {
    return (<div>
      <Navbar location={props.location}
       result={props.result} 
       notifications={props.notifications}
       account={props.account}
       className='navbar-fixed'
       color='white' />
      <Sidenav />
      <div className='row'>
      <Sidepanel className='col m2 hide-on-med-and-down my-side-nav'>
        <div className='section'>
          <PanelItem icon='home' label='Home' />
          <PanelItem icon='group' label='Groups' />
          <PanelItem icon='account_circle' label='Profile' />
          <PanelItem icon='notifications' label='Notifications' />
        </div>
        <div className='divider'></div>
        <div className='section'>
          <PanelItem className='my-nav-subitem' label='Report an issue' />
          <PanelItem className='my-nav-subitem' label='Help' />
        </div>
        <Footer className='nav-footer' />
      </Sidepanel>
      </div>
      <div className='col s12 m10 offset-12'>
      </div>
    </div>
    );
}
