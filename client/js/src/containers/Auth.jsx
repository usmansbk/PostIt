import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrivateRoute from '../components/helpers/PrivateRoute';
import { Status } from '../redux/actionTypes';

function isAuthenticated(status) {
	return status === Status.LOGGED_IN || Status.LOGGEG_OUT;
}

const mapStateToProps = state => {
	return {
		auth: isAuthenticated(state.session)
	}
}
const PrivateRouteContainer = connect(
	mapStateToProps,
)(PrivateRoute);

export default withRouter(PrivateRouteContainer);