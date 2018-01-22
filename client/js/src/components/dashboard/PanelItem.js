import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default ({currentLocation, label, icon, className, onClick}) => {
  const color = (currentLocation === label) ?
                'red-text text-lighten-1' : 'grey-text text-darken-3';
  return (
    <div className={'my-nav-item valign-wrapper ' + color} label={label}>
      { icon && <Icon className={color} label={label}>{icon}</Icon> }
      <span className={ className || 'my-nav-label ' + color} label={label}>{label}</span>
    </div>
  );
}
