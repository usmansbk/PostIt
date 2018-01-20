import React from 'react';

export default ({onFocus, onChange, children}) => {
	const style = {
		width: '400px',
	};

	return (
		<div className='search'
      		 data-target='search-result' style={style}>
      		<input type='search' placeholder='Search PostIt'
      		 className='grey lighten-3' name='search' onChange={onChange} autoComplete='off' />
      		{children}
		</div>
	);
}