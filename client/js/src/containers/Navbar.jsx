import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import { setGroup, setPage } from '../redux/actionTypes';
import { fetchUsers } from '../redux/asyncActions';

const mapStateToProps = state => {
  return {
    page: state.page,
    username: state.account.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
      _navigate: (history) => {
        const { pathname } = history.location;
        const groupRegex = /^\/dashboard\/groups(\/(\d{0,}))?$/.exec(pathname);
        let page = 'Home';
        if (groupRegex) {
          page = 'Groups';
          const id = groupRegex[2]
          if (id) {
            page = 'Group';
            dispatch(setGroup(+id));
          }
        }
        dispatch(setPage(page));
      },
      _search: (value) => {
        dispatch(fetchUsers(value));
      }
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default withRouter(NavbarContainer);