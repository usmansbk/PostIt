import React from 'react';
import SearchBox from '../components/dashboard/SearchBox';

export default class SearchBoxContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const userss = [
			{
				username: 'usmansbk',
				email: 'usmansbk@gmail.com',
			}
		];
		return (
			<SearchBox />
		);
	}
}