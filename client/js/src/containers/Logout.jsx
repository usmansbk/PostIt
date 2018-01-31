import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSession, Status, logout } from '../redux/actionTypes';
import Logout from '../components/dashboard/Logout';

const isLoggedIn = status => status === Status.SIGNED_OUT

const mapStateToProps = state => {
  return {
    session: isLoggedIn(state.session),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: (history) => {
      dispatch(setSession(Status.SIGNED_OUT));
      dispatch(logout());
      history.replace('/')
    }
  }
}
const LogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);

export default withRouter(LogoutContainer);