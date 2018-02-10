import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../src/components/common/Button';

describe('Button', () => {
  it('should render', () => {
    const component = renderer.create(<Button />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})