import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default ({currentLocation, label, icon, className}) => {
  const color = (currentLocation === label) ?
                'red-text text-lighten-1' : 'grey-text text-darken-3';
  return (
    <div className={'my-nav-item valign-wrapper ' + color}>
      { icon && <Icon className={color}>{icon}</Icon> }
      <span className={ className || 'my-nav-label ' + color}>{label}</span>
    </div>
  );
}
