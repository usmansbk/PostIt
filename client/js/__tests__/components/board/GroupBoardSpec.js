import React from 'react';
import GroupBoard from '../../../src/components/board/GroupBoard';
import renderer from 'react-test-renderer';

describe('<GroupBoard />', () => {
	test('renders group board', () => {
		const component = renderer.create(<GroupBoard />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});