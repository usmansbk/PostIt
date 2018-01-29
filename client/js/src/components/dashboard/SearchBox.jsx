import React from 'react';
import SearchItem from './SearchItem';
import Loader from '../common/Loader';
import '../../../../stylesheets/sass/components/Searchbox.scss';

export default ({users, page, isFetching, failed, found}) => {
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
	const message = <p className='center-align grey-text'>{ failed ? 'Search failed' : 'Search not found' }</p>
	const askMore = !(isFetching || failed || found) && <a href='#'><p className='blue-text center-align' style={p}>More</p></a>;
	const showLoader = (isFetching && !(failed || found)) && <div className='center-align'><Loader /></div>;
	const userComponents = users.map((user, index) => <SearchItem key={index} page={page} {...user}/>);

	return (
		<div className='search card-panel grey lighten-3' id='search-result' style={style} >
			<div className='center-align'>
			</div>
			{ userComponents }
			{ showLoader }
			{ askMore }
			{ (failed || found) && message }
		</div>);
}