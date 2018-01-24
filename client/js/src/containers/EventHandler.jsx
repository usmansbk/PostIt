import React from 'react';
import { connect } from 'react-redux';
import EventHandler from '../components/helpers/EventHandlersWrapper';
import { setPage } from '../redux/actionTypes';

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: event => {
			const target = event.currentTarget;
			const name = target.getAttribute('label');
			dispatch(setPage(name));
		}
	}
}

const EventHandlerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventHandler);

export default EventHandlerContainer;