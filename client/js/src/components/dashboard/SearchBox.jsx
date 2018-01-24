import React from 'react';
import SearchItem from './SearchItem';
import '../../../../stylesheets/sass/components/Searchbox.scss';

export default ({users, page}) => {
	let userComponents;
	const style = {
		padding: '0px',
		margin: '0px',
		maxHeight: '200px',
		overflowY: 'auto',
	};

	const p = {
		height: '20px',
		lineHeight: '20px',
	}

	if (users) {
		userComponents = users.map((user, index) => <SearchItem key={index} page={page} {...user}/>);
	}
	return (
		<div className='search card-panel grey lighten-3' id='search-result' style={style} >
			{ userComponents }
			{userComponents && <a href='#'><p className='blue-text center-align' style={p}>More</p></a>}
		</div>);
}