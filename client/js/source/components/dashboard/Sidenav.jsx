import React from 'react';
import Icon from '../common/Icon.jsx';
import Footer from '../common/Footer.jsx';
import M from '../../../materialize';

export default class Sidenav extends React.Component {
  componentWillMount() {
    document.addEventListener('DOMContentLoaded', (event) => {
      let elem = document.querySelector('.sidenav');
      let instance = M.Sidenav.init(elem);
    });
  }

  render() {
    return (
      <ul id='slide-out' className='sidenav'>
        <li className='fixed'>
          <a className='sidenav-close grey-text text-darken-1' href='#'>
            <div className='row valign-wrapper'>
              <h5 className='col s10'>PostIt</h5>
              <Icon>chevron_left</Icon>
            </div>
          </a>
        </li>
        <li><div className='divider'></div></li>
        <li><a><Icon>home</Icon>Home</a></li>
        <li><a><Icon>group</Icon>Groups</a></li>
        <li><a><Icon>account_circle</Icon>Profile</a></li>
        <li><a><Icon>notifications</Icon>Notifications</a></li>
        <li><div className='divider'></div></li>
        <li><a className='grey-text'>Report an issue</a></li>
        <li><a className='grey-text'>Help</a></li>
        <li><Footer /></li>
      </ul>
    );
  }
}
