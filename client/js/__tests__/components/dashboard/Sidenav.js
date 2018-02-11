import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidenav from '../../../src/components/dashboard/Sidenav';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidenav', () => {
  it('should render self and subcomponent', () => {
    const wrapper = shallow(<Sidenav />);
    expect(wrapper).toBeTruthy()
  })

  it('should render close button', () => {
    const wrapper = shallow(<Sidenav />);
    expect(wrapper.find('.sidenav-close').length).toBeTruthy();
  })

  it('should render dashboard link', () => {
    const wrapper = shallow(<Sidenav />);
    expect(wrapper.find('[to="/dashboard"]').length).toBe(1)
  })

  it('should render groups link', () => {
    const wrapper = shallow(<Sidenav />);
    expect(wrapper.find('[to="/dashboard/groups"]').length).toBe(1)
  })

  it('should render Footer component', () => {
    const wrapper = shallow(<Sidenav />);
    expect(wrapper.find('Footer').length).toBeTruthy()
  })
})