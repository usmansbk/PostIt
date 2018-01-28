import React from 'react';
import Icon from '../common/Icon';
import Footer from '../common/Footer';
import PanelItem from './PanelItem';

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
        <Icon>home</Icon><span className='sidenav-item'>Home</span>
      </li>
      <li>
        <Icon>group</Icon><span className='sidenav-item'>Groups</span>
      </li>
      <li><Footer className='center-align'/></li>
    </ul>
  );
}
