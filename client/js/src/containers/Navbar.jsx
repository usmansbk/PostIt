import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/dashboard/Navbar';
import { defaultAvatar } from '../helpers/constants';

const mapStateToProps = state => {
  return {
    page: state.page,
    username: state.account.username
  }
}

const NavbarContainer = connect(
  mapStateToProps
)(Navbar)

export default NavbarContainer;