import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';
import Footer from '../common/Footer';

export default () => {
  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <a className='sidenav-close grey-text text-darken-1' href='#'>
          <div className='row valign-wrapper'>
            <h5 className='col s10'>PostIt</h5>
            <Icon>chevron_left</Icon>
          </div>
        </a>
      </li>
      <li><div className='divider'></div></li>
      <li>
        <NavLink exact to='/dashboard' activeClassName='red-text text-lighten-1'><Icon>home</Icon><span className='sidenav-item'>Home</span></NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/groups' activeClassName='red-text text-lighten-1'><Icon>group</Icon><span className='sidenav-item'>Groups</span></NavLink>
      </li>
      <li><Footer className='center-align'/></li>
    </ul>
  );
}
