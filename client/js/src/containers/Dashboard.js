import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import { setLocation } from '../redux/actionTypes';


const mapStateToProps = state => {
	return {
		currentLocation: state.location.name,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: event => {
			const target = event.target;
			const name = target.getAttribute('label');
			const location = {
				name,
			};
			dispatch(setLocation(location));
		}
	}
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer;