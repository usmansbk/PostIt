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
      <li><NavLink to='/dashboard/home' activeClassName='red-text text-lighten-1'><Icon>home</Icon>Home</NavLink></li>
      <li><NavLink to='/dashboard/groups' activeClassName='red-text text-lighten-1'><Icon>group</Icon>Groups</NavLink></li>
      <li><NavLink to='/dashboard/profile' activeClassName='red-text text-lighten-1'><Icon>account_circle</Icon>Profile</NavLink></li>
      <li><Footer /></li>
    </ul>
  );
}
