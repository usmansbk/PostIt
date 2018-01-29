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
	const userComponents = users.map((user, index) => <SearchItem key={index} page={page} {...user}/>);

    const isNotFound = !found && !failed
        , shouldShowLoader = isFetching && isNotFound
	    , shouldAskMore = found && !shouldShowLoader;

	const askMore = <a href='#'><p className='blue-text center-align' style={p}>More</p></a>
	    , notFound = <p className='grey-text center-align'>User not found</p>
	    , hasFailed = <p className='grey-text center-align'>Search failed</p>
	    , showLoader = <div className='center-align'><Loader /></div>;

	return (
		<div className='search card-panel grey lighten-3' id='search-result' style={style} >
			{ userComponents }
			{ isNotFound && notFound }
			{ shouldShowLoader && showLoader }
			{ shouldAskMore && askMore }
			{ failed && hasFailed }
		</div>);
}