import React from 'react';
import SearchItem from './SearchItem';
import Loader from '../common/Loader';
import Icon from '../common/Icon';
import M from '../../../materialize';
import '../../../../stylesheets/sass/components/Searchbox.scss';


export default class Searchbox extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.handleAddOrRemove(event);
	}

	componentWillReceiveProps(nextProps) {
		const { added, addFailed } = nextProps;
		if (added) {
			M.toast({html: 'User added', classes: 'rounded'});
		}

		if (addFailed) {
			M.toast({html: 'Failed to add user', classes: 'rounded'});
		}
	}

	render() {
	    const {users, page, isFetching, failed, found, gid} = this.props;
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
		const userComponents = users.map((user, index) => <SearchItem gid={gid} onClick={this.handleClick} key={index} page={page} {...user}/>);

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
}