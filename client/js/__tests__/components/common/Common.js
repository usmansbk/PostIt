import React from 'react';
import renderer from 'react-test-renderer';
import {
  Button,
  Fab,
  Footer,
  Icon,
  InputField,
  Loader,
  Logo
} from '../../../src/components/common';

describe('Common', () => {
  const testComponent = Component => {
    const component = renderer.create(<Component />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  }

  it('should render Button', () => testComponent(Button))

  it('should render Fab', () => testComponent(Fab))

  it('should render Footer', () => testComponent(Footer))

  it('should render Icon', () => testComponent(Icon))

  it('should render InputField', () => testComponent(InputField))

  it('should render Loader', () => testComponent(Loader))

  it('should render Logo', () => testComponent(Logo))
})