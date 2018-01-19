import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default function PanelItem({location, label, icon, className}) {
  const color = (location === label) ?
                'red-text text-lighten-1' : 'grey-text text-darken-3';
  return (
    <div className={'my-nav-item valign-wrapper ' + color}>
      { icon && <Icon className={color}>{icon}</Icon> }
      <span className={ className || 'my-nav-label ' + color}>{label}</span>
    </div>
  );
}
