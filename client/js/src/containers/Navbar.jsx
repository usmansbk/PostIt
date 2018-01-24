import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/dashboard/Navbar';
import { defaultAvatar } from '../helpers/constants';

const mapStateToProps = state => {
  return {
    page: state.page,
    avatarImage: state.account.avatar || defaultAvatar
  }
}

const NavbarContainer = connect(
  mapStateToProps
)(Navbar)

export default NavbarContainer;