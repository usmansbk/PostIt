import React from 'react';
import Icon from './Icon.jsx';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default function PanelItem(props) {
  const color = (props.location === props.label) ?
                'red-text text-lighten-1' : 'grey-text text-darken-3';
  return (
    <div className={'my-nav-item valign-wrapper ' + color}>
      { props.icon && <Icon className={color}>{props.icon}</Icon> }
      <span className={ props.className || 'my-nav-label ' + color}>{props.label}</span>
      { props.children }
    </div>
  );
}
