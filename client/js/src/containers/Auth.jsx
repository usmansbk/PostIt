import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../components/helpers/PrivateRoute';
import { Status } from '../redux/actionTypes';

function isAuthenticated(status) {
	return status === Status.SIGNED_IN;
}

const mapStateToProps = state => {
	return {
		auth: isAuthenticated(state.session)
	}
}
const PrivateRouteContainer = connect(
	mapStateToProps,
)(PrivateRoute);

export default PrivateRouteContainer;