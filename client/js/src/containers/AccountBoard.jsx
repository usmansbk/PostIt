import React from 'react';
import { connect } from 'react-redux';
import AccountBoard from '../components/board/AccountBoard';

const getAccount = (account) => {
  return account;
};

const mapStateToProps = state => {
  return {
    accountInfo: getAccount(state.account)
  }
}

const AccountBoardContainer = connect(
  mapStateToProps
)(AccountBoard)

export default AccountBoardContainer;
