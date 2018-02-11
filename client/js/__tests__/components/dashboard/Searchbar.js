import React from 'react';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Searchbar from '../../../src/components/dashboard/Searchbar';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onClick: jest.fn(),
  }

  const mockEvent = {};
  mockEvent.preventDefault = jest.fn();

  const wrapper = mount(<Searchbar {...props } />)

  return {
    props,
    wrapper,
    mockEvent
  }
}

describe('Searchbar', () => {
  it('should render component', () => {
    const component = renderer.create(<Searchbar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should call onClick', () => {
    const { wrapper, props, mockEvent } = setup();
    const icon = wrapper.find('i[name="cancel-search"]');
    icon.simulate('click', mockEvent);
    expect(props.onClick).toBeCalled();
  })
})