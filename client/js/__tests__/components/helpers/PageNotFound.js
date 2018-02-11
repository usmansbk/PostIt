import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageNotFound from '../../../src/components/helpers/PageNotFound';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    location: jest.fn()
  }

  const wrapper = shallow(<PageNotFound {...props } />)

  return {
    props,
    wrapper
  }
}
describe('PageNotFound', () => {
  it('should render 404 text', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').text()).toBe('404');
    expect(wrapper.find('h2').text()).toBe('Page Not Found');
    expect(wrapper.find('h6').text()).toBe('The link you followed may be broken');
  })

  it('should render signup NavLink', () => {
    const { wrapper } = setup();
    const NavLink = wrapper.find("[to='/signup']");
    expect(NavLink.length).toBe(1);
  })

  it('should render index NavLink', () => {
    const { wrapper } = setup();
    const NavLink = wrapper.find("[to='/']");
    expect(NavLink.length).toBe(1);
  })
  
})