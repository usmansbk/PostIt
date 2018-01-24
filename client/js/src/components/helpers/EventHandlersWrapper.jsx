import React from 'react';

export default ({onClick, children, label, className}) => {
	return <div onClick={onClick} label={label}  className={className}>
		{children}
	</div>
}