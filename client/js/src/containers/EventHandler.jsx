import React from 'react';
import { connect } from 'react-redux';
import EventHandler from '../components/helpers/EventHandlersWrapper';

const mapDispatchToState = dispatch => {
	return {
		onClick: event => {
			const target = event.currentTarget;
			const locationName = target.getAttribute('label');
			console.log('Hello from EventHandler', locationName);
		}
	}
}

const EventHandlerContainer = connect(
	mapDispatchToState
)(EventHandler);

export default EventHandlerContainer;