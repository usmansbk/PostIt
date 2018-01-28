import React from 'react';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default ({label, icon, className}) => {
  return (
    <div className={'my-nav-item valign-wrapper'}>
      <span><Icon className='grey-text text-darken-1'>{icon}</Icon></span>
      <span className='my-nav-label grey-text text-darken-4'>{label}</span>
    </div>
  );
}
