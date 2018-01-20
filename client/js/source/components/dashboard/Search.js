import React from 'react';

export default ({onFocus, onBlur}) => {
	return (
		<div className='search'
      		 data-target='search-result'>
      		<input type='search' placeholder='Search PostIt'
      		 className='grey lighten-3' name='search' onFocus={onFocus} onBlur={onBlur} autoComplete='off' />
		</div>
	);
}