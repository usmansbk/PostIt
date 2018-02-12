import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../../../src/components/dashboard/Navbar';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    _navigate: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = mount(<SearchItem {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('Navbar', () => {
})