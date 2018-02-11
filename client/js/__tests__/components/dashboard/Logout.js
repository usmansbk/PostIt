import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logout from '../../../src/components/dashboard/Logout';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    handleLogout: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = shallow(<Logout {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('Logout', () => {
  it('should render component', () => {
    const { wrapper } = setup();
    const span = wrapper.find('span');
    expect(span.length).toBe(1);
  })

  it('should call handleLogout', () => {
    const { wrapper, props, mockEvent } = setup();
    const span = wrapper.find('span');
    span.simulate('click', mockEvent);
    expect(props.handleLogout).toBeCalled();
  })
})