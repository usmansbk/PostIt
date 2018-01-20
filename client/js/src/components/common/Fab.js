import React from 'react';
import Icon from './Icon';

export default ({href, color, children}) => {
	return (
		<div className='fixed-action-btn'>
			<a className={'btn-floating btn-large modal-trigger ' + color } href={href} >
				<Icon className='white-text'>{children}</Icon>
			</a>
		</div>
	);
}