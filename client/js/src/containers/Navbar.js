import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/dashboard/Navbar';
import { defaultAvatar } from '../Constants';

const mapStateToProps = state => {
  return {
    locationName: state.location.name,
    avatarImage: state.account.avatar || defaultAvatar
  }
}

const NavbarContainer = connect(
  mapStateToProps
)(Navbar)

export default NavbarContainer;