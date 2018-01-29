import React from 'react';
import SearchItem from './SearchItem';
import Loader from '../common/Loader';
import Icon from '../common/Icon';
import '../../../../stylesheets/sass/components/Searchbox.scss';

export default ({users, page, isFetching, failed, found, handleAddOrRemove, gid}) => {
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
	const userComponents = users.map((user, index) => <SearchItem gid={gid} onClick={handleAddOrRemove} key={index} page={page} {...user}/>);

    const shouldShowLoader = isFetching && !found;

	const hasFailed = <p className='grey-text center-align'>Search failed</p>
	    , showLoader = <div className='center-align'><Loader /></div>;

	return (
		<div className='search card-panel grey lighten-3' id='search-result' style={style}>
			{ userComponents }
			{ shouldShowLoader && showLoader }
			{ failed && hasFailed }
		</div>);
}