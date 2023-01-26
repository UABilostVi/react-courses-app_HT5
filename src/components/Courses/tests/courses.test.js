import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Courses from '../Courses';
import userEvent from '@testing-library/user-event';
import { BUTTON_ADD_COURSE_TEXT } from '../../../constants';

const mockedState = {
	user: {
		isAuth: true,
		name: 'TestName',
		role: 'admin',
	},
	courses: [
		{
			title: 'Title1',
			description: 'Description1',
			duration: 150,
			authors: [
				'9987de6a-b475-484a-b885-622b8fb88bda',
				'd20a3311-c770-4adf-8496-c1c83ee7d570',
			],
			creationDate: '19/12/2022',
			id: '11c70dfb-05a4-4803-8895-f0ec5a01d0ae',
		},
		{
			title: 'Title2',
			description: 'Description2',
			duration: 150,
			authors: [
				'9987de6a-b475-484a-b885-622b8fb88bda',
				'd20a3311-c770-4adf-8496-c1c83ee7d570',
			],
			creationDate: '19/12/2022',
			id: '11c70dfb-05a4-4803-8895-f0ec5a01d0ay',
		},
	],
	authors: [
		{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
		{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
		{ name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
		{ name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
		{ name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
		{ name: 'author6', id: '9987de6a-b475-484a-b885-622b8fb88bda' },
	],
};

const mockedStateEmptyCourses = {
	user: {
		isAuth: true,
		name: 'TestName',
	},
	courses: [],
	authors: [
		{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
		{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
		{ name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
		{ name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
		{ name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
		{ name: 'author6', id: '9987de6a-b475-484a-b885-622b8fb88bda' },
	],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const mockedStoreEmptyCourses = {
	getState: () => mockedStateEmptyCourses,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('courses component tests', () => {
	it('should display amount of CourseCard equal length of courses array', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);
		const courses = document.querySelector('.coursesList');
		expect(courses.children.length).toEqual(mockedState.courses.length);
	});

	it('should display Empty container if courses array length is 0', () => {
		render(
			<Provider store={mockedStoreEmptyCourses}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);
		const courses = document.querySelector('.coursesList');
		expect(courses).toBeEmptyDOMElement();
	});

	it('should be showed after a click on a button "Add new course"', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);
		userEvent.click(screen.getByText(BUTTON_ADD_COURSE_TEXT));
		waitFor(() => {
			expect(document.querySelector('.coursesForm')).toBeInTheDocument();
		});
	});
});
