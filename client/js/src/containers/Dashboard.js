import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';

export default class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Dashboard currentLocation={'Home'}/>
  }
}
