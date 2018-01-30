import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Status } from '../redux/actionTypes';
import Dashboard from '../components/dashboard/Dashboard';

function isLoggedIn(session) {
	return session === Status.SIGNED_IN
}

const mapStateToProps = state => {
  return {
  	isLoggedIn: isLoggedIn(state.session)
  }
}

const mapDispatchToProps = state => {
	return {
		isAuthenticated: (history, isLoggedIn) => {
			if (!isLoggedIn) {
				history.push('/');
			}
		}
	}
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default withRouter(DashboardContainer);