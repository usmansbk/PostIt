import React from 'react';
import SignInForm from '../../../src/components/sign/SignInForm';
import renderer from 'react-test-renderer';

describe('<SignInForm />', () => {
	test('renders sign-in form', () => {
		const component = renderer.create(
			<SignInForm />
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});