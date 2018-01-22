import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';

const getLocation = (name) => {
	return name;
};

const mapStateToProps = state => {
  return {
    currentLocation: getLocation(state.location.name)
  }
}

const DashboardContainer = connect(
  mapStateToProps
)(Dashboard)

export default DashboardContainer;