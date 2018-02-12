import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SearchBox from '../../../src/components/dashboard/SearchBox';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    users: [],
    page: undefined,
    isFetching: false,
    failed: false,
    found: false,
    gid: 1,
    add: false,
    addFailed: false,
    handleAddOrRemove: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = shallow(<SearchBox {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('SearchBox', () => {
  it('should render SearchItem', () => {
    const mockUsers = [
      {
        username: 'username',
        id: 1,
        email: 'username@email.com'
      }
    ]
    const { wrapper } = setup();
    wrapper.setProps({
      users: mockUsers
    })
    const found = wrapper.find('[gid=1]');
    expect(found.length).toBe(1);
  })
})