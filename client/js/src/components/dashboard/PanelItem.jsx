import React from 'react';
import Icon from '../common/Icon';
import EventHandler from '../../containers/EventHandler';
import '../../../../stylesheets/sass/components/PanelItem.scss';

export default ({currentLocation, label, icon, className}) => {
  return (
  	<EventHandler label={label}>
	    <div className={'my-nav-item valign-wrapper'}>
	      <span><Icon>{icon}</Icon></span>
	      <span className='my-nav-label'>{label}</span>
	    </div>
	</EventHandler>
  );
}
