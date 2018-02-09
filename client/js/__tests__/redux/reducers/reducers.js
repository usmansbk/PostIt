import * as reducers from '../../../src/redux/reducers';
import * as actions from '../../../src/redux/actionTypes';

describe('error reducer', () => {
  it('should return initial error state', () => {
    expect(reducers.error(undefined, {})).toBeNull();
  })
  it('should handle SET_ERROR_MESSAGE', () => {
    expect(reducers.error(undefined, actions.setErrorMessage('Failed')))
    .toBe('Failed')
  })
})

describe('page reducer', () => {
  it('should return initial page', () => {
    expect(reducers.page(undefined, {})).toEqual('Home')
  })
  it('should handle SELECT_PAGE', () => {
    expect(reducers.page(undefined, actions.setPage('Groups')))
    .toBe('Groups')
  })
})

describe('selected group reducer', () => {
  it('should return initial selected group', () => {
    expect(reducers.group(undefined, {})).toBeNull();
  })
  it('should handle SELECT_GROUP', () => {
    expect(reducers.group(undefined, actions.setGroup(2)))
    .toBe(2)
  })
})

describe('account reducer', () => {
  it('should return initial state', () => {
    expect(reducers.account(undefined, {}))
    .toEqual({})
  })
  it('should handle SET_ACCOUNT_DETAILS', () => {
    expect(reducers.account(undefined, actions.setAccountDetails({
      username: 'USERNAME', 
      id: 1,
      email: 'username@email.com'
    })))
    .toEqual({
      username: 'USERNAME',
      id: 1,
      email: 'username@email.com'
    })
  })
})

describe('status reducer', () => {
  it('should return initial state', () => {
    expect(reducers.status(undefined, {}))
    .toBe(actions.Status.CLEAR)
  })
  it('should handle SET_STATUS', () => {
    expect(reducers.status(undefined, actions.setStatus('NEW_STATUS')))
    .toBe('NEW_STATUS')
  })
})

describe('session reducer', () => {
  it('should return initial state', () => {
    expect(reducers.session(undefined, {}))
    .toBe(actions.Status.SIGNED_OUT)
  })
  it('should handle SET_SESSION', () => {
    expect(reducers.session(undefined, actions.setSession('SIGNED_IN')))
    .toBe(actions.Status.SIGNED_IN)
  })
})