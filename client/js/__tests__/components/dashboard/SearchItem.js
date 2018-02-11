import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SearchItem from '../../../src/components/dashboard/SearchItem';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    page: null,
    canAdmin: false,
    isMember: false,
    add: false,
    addFailed: false,
    gid: 1,
    onClick: jest.fn()
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

describe('SearchItem', () => {
  it('should render component', () => {
    const component = renderer.create(<SearchItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('should not render add component', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({
      page: 'Group',
      canAdmin: false,
      isMember: false
    });
    const addIcon = wrapper.find(`i[gid=${props.gid}]`)
    expect(addIcon.length).toBeFalsy();
  }) 

  it('should not render add component', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({
      page: 'Group',
      canAdmin: true,
      isMember: true
    });
    const addIcon = wrapper.find(`i[gid=${props.gid}]`)
    expect(addIcon.length).toBeFalsy();
  })

  it('should render add component', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({
      page: 'Group',
      canAdmin: true,
      isMember: false
    });
    const addIcon = wrapper.find(`i[gid=${props.gid}]`)
    expect(addIcon.length).toBeTruthy();
  })

  it('should call onClick', () => {
    const { wrapper, mockEvent, props } = setup();
    wrapper.setProps({
      page: 'Group',
      canAdmin: true,
      isMember: false
    });
    const addComponent = wrapper.find(`i[gid=${props.gid}]`)
    addComponent.simulate('click', mockEvent);
    expect(props.onClick).toBeCalled();
  })
})