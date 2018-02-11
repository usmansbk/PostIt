import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchItem from '../../../src/components/dashboard/SearchItem';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    handleLogout: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = shallow(<SearchItem {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('SearchItem', () => {
  
})