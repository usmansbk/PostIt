import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default ({currentLocation, label, icon, className}) => {
  return (
    <div className={'my-nav-item valign-wrapper'}>
      <span><Icon>{icon}</Icon></span>
      <span className='my-nav-label'>{label}</span>
    </div>
  );
}
