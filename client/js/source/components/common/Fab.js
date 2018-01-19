import React from 'react';
import Icon from './Icon';

export default ({href, color}) => {
	return (
		<div className='fixed-action-btn modal-trigger'>
			<a className={'btn-floating btn-large ' + color } href={href} >
				<Icon className='white-text'>add_circle_outline</Icon>
			</a>
		</div>
	);
}