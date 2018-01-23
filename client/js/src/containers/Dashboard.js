import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import { setLocation } from '../redux/actionTypes';


const mapStateToProps = state => {
	return {
		currentLocation: state.location.name,
	}
}

const DashboardContainer = connect(
  mapStateToProps,
)(Dashboard)

export default DashboardContainer;