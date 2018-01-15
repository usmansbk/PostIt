import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default function PanelItem(props) {
  const color = (props.location === props.label) ?
                'red-text' : 'grey-text';
  return (
    <div className={'my-nav-item valign-wrapper ' + color}>
      { props.icon && <Icon className={color}>{props.icon}</Icon> }
      <span className={ props.className || 'my-nav-label text-darken-4 ' + color}>{props.label}</span>
      { props.children }
    </div>
  );
}
