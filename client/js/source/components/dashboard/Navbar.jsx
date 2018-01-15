import React from 'react';
import Search from './Search.jsx';
import Logo from '../common/Logo.jsx';
import Icon from '../common/Icon.jsx';
import Avatar from '../common/Avatar.jsx';
import '../../../../stylesheets/sass/components/Navbar.scss';

export default function Navbar (props) {
  console.log(props.Color);
  return (
    <div className={props.className} >
      <nav>
        <div className={ 'nav-wrapper ' + props.color }>
          <a className='sidenav-trigger'><i className='material-icons grey-text'>menu</i></a>
          <Logo href='#'>PostIt</Logo>
          <span className='vl grey lighten-1'>.</span>
          <span id='location' className='grey-text' >{props.location}</span>
           <ul className='right'>
            <li><Icon href='#'>search</Icon></li>
            <li><Icon href='#'>notifications</Icon></li>
            <li><Icon href='#'>account_circle</Icon></li>
           </ul>
         <Search placeholder='Search PostIt' visibility='right hide-on-med-and-down' />
        </div>
      </nav>
    </div>
  );
}
