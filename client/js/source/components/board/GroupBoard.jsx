import React from 'react';
import M from '../../../materialize';
import MessageBoard from './MessageBoard.jsx';
import GroupInfo from './GroupInfo.jsx';
import Icon from '../common/Icon.jsx';

export default class GroupBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { posts } = this.props;

		return (<div className='row'>
			<div className='col s12 l4'>
				<GroupInfo />
			</div>
			<div className='col s12 l8'>
				<MessageBoard posts={posts} />
			</div>
		</div>
		);
	}
}
