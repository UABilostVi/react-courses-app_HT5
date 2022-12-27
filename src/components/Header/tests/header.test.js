import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

const mockedState = {
	user: {
		isAuth: true,
		name: 'TestName',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('header component tests', () => {
	it('should have users name', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
		expect(screen.queryByText(mockedState.user.name)).toBeInTheDocument();
	});
	it('should have logo', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
		expect(screen.queryByAltText('logo')).toBeInTheDocument();
	});
});
