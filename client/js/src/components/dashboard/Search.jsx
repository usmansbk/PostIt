import React from 'react';

export default ({onFocus, onChange, children, id}) => {
	const style = {
		width: '400px',
	};

	return (
		<div className='search hide-on-med-and-down'
      		 data-target='search-result' style={style} id={id}>
      		<input type='search' placeholder='Search PostIt'
      		 className='grey lighten-3 hide-on-med-and-down' name='search' onChange={onChange} autoComplete='off' />
      		{children}
		</div>
	);
}