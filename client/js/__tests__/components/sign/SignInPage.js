import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignInPage from '../../../src/components/sign/SignInPage';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    signingIn: false,
    signedIn: false,
    failed: false,
    handleSignin: jest.fn(),
    handleSubmit: jest.fn()
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = shallow(<SignInPage {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('SignInPage', () => {
  it('should render signup link', () => {
    const { wrapper } = setup();
    const NavLink = wrapper.find("[to='/signup']");
    expect(NavLink.length).toBe(1);
  })

  it('should render signin form', () => {
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
    wrapper.setProps({signingIn: true });
    const Loader = wrapper.find('Loader');
    expect(Loader.length).toBe(1);
  })

  describe('form', () => {
    it('should render two InputField', () => {
      const { wrapper } = setup();
      const InputFields = wrapper.find(".input-field");
      expect(InputFields.length).toBe(2);
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
      it('should call handleSignin', () => {
        const { wrapper, props, mockEvent } = setup();
        wrapper.setProps({ failed: true });
        expect(props.handleSignin).toBeCalled();
      })
    })
  })
})