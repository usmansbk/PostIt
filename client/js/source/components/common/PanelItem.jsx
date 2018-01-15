import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default function PanelItem(props) {
  return (
    <div className='my-nav-item valign-wrapper grey-text'>
      { props.icon && <Icon>{props.icon}</Icon> }
      <span className={ props.className || 'my-nav-label grey-text text-darken-4 '}>{props.label}</span>
      { props.children }
    </div>
  );
}
