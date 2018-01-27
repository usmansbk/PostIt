import React from 'react';
import { connect } from 'react-redux';
import EventHandler from '../components/helpers/EventHandlersWrapper';
import { setPage, Filter } from '../redux/actionTypes';
import { fetchGroups, fetchPosts } from '../redux/asyncActions';

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: event => {
			const target = event.currentTarget;
			const name = target.getAttribute('label');
			dispatch(setPage(name));
			switch (name) {
				case 'Groups':
					dispatch(fetchGroups(Filter.ALL))
			}
		}
	}
}

const EventHandlerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventHandler);

export default EventHandlerContainer;