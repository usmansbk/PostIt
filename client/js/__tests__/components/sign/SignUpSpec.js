import React from 'react';
import SignUpForm from '../../../src/components/sign/SignUpForm';
import renderer from 'react-test-renderer';

describe('<SignUpForm />', () => {
	test('renders sign-up form', () => {
		const component = renderer.create(
			<SignUpForm />
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});