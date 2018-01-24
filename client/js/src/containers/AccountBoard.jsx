import React from 'react';
import { connect } from 'react-redux';
import AccountBoard from '../components/board/AccountBoard';
import { defaultAvatar } from '../utils/constants';

const getAccount = (account) => {
  account.avatar = account.avatar || defaultAvatar;
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
