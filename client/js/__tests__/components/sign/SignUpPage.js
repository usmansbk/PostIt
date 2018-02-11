import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpPage from '../../../src/components/sign/SignUpPage';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    signingUp: false,
    failed: false,
    handleSignup: jest.fn(),
    handleSubmit: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = shallow(<SignUpPage {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('SignUpPage', () => {
  it('should render signin link', () => {
    const { wrapper } = setup();
    const NavLink = wrapper.find("[to='/']");
    expect(NavLink.length).toBe(1);
  })

  it('should render signup form', () => {
    const { wrapper } = setup();
    const Form = wrapper.find('form');
    expect(Form.length).toBe(1);
  })

  it('should render error message', () => {
    const { wrapper } = setup();
    wrapper.setProps({ failed: true })
    const Error = wrapper.find('p');
    expect(Error.length).toBe(2);
  })

  it('should render Loader', () => {
    const { wrapper } = setup();
    wrapper.setProps({signingUp: true });
    const Loader = wrapper.find('Loader');
    expect(Loader.length).toBe(1);
  })

  describe('form', () => {
    it('should render four InputField', () => {
      const { wrapper } = setup();
      const InputFields = wrapper.find(".input-field");
      expect(InputFields.length).toBe(4);
    })

    it('should render submit button', () => {
      const { wrapper } = setup();
      const Button = wrapper.find("[type='submit']");
      expect(Button.length).toBe(1);
    })
  })

  describe('EventListeners', () => {
    describe('form on submit', () => {
      it('should call handleSubmit', () => {
        const { wrapper, props, mockEvent } = setup();
        const form = wrapper.find("form");
        form.simulate('submit', mockEvent);
        expect(props.handleSubmit).toBeCalled();
      })
    })

    describe('props change', () => {
      it('should call handleSignup', () => {
        const { wrapper, props, mockEvent } = setup();
        wrapper.setProps({ failed: true });
        expect(props.handleSignup).toBeCalled();
      })
    })
  })
})