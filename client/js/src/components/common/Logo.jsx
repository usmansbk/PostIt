import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../../stylesheets/sass/components/Logo.scss';

export default (props) => {
  return (
    <NavLink to='/dashboard'>
      <span id='brand-logo'
      href={props.href}
      className={'grey-text text-darken-1 ' + (props.className || 'hide-on-med-and-down')
      }>PostIt</span>
    </NavLink>
  );
}
