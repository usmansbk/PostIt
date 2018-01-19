import React from 'react';
import Icon from './Icon';

export default ({href, color, children}) => {
	return (
		<div className='fixed-action-btn modal-trigger'>
			<a className={'btn-floating btn-large ' + color } href={href} >
				<Icon className='white-text'>{children}</Icon>
			</a>
		</div>
	);
}