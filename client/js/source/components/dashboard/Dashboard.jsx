import React from 'react';
import Navbar from './Navbar.jsx';

export default function Dashboard(props) {
    return (
      <Navbar location={props.location} className='navbar-fixed' color='white' />
    );
}
