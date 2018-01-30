import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';


const mapStateToProps = state => {
  return {
  }
}

const DashboardContainer = connect(
  mapStateToProps,
)(Dashboard)

export default withRouter(DashboardContainer);