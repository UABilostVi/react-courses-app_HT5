import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseCard from '../CourseCard';

const mockedState = {
	user: {
		isAuth: true,
		name: 'TestName',
	},
	courses: [],
	authors: [],
};

const authors = [
	{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
	{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
	{ name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
	{ name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
	{ name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
	{ name: 'author6', id: '9987de6a-b475-484a-b885-622b8fb88bda' },
	{ name: 'sdf', id: 'd20a3311-c770-4adf-8496-c1c83ee7d570' },
	{ name: 'NEW', id: 'f1f396ef-2427-403d-a946-1b64912f99f7' },
	{ name: 'sdf', id: '096a8732-75a3-4a04-98c3-ee044770baad' },
];

const course = {
	title: 'TitleTitle',
	description: 'TitleTitleTitleTitleTitle TitleTitlevv',
	duration: 150,
	authors: [
		'9987de6a-b475-484a-b885-622b8fb88bda',
		'd20a3311-c770-4adf-8496-c1c83ee7d570',
	],
	creationDate: '19/12/2022',
	id: '11c70dfb-05a4-4803-8895-f0ec5a01d0ae',
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('CourseCard tests', () => {
	it('should display title', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard course={course} />
				</Router>
			</Provider>
		);
		expect(screen.queryByText(course.title)).toBeInTheDocument();
	});

	it('should display description', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard course={course} />
				</Router>
			</Provider>
		);
		expect(screen.queryByText(course.description)).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard course={course} />
				</Router>
			</Provider>
		);
		expect(screen.queryByText(/02:30/)).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard course={course} />
				</Router>
			</Provider>
		);
		expect(screen.getByText(/19.12.2022/)).toBeInTheDocument();
	});

	it('should display authors list', () => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard course={course} />
				</Router>
			</Provider>
		);

		const courseAuthors = course.authors
			.map((authorId) => authors.find(({ id }) => id === authorId))
			.filter(Boolean)
			.map((author) => author.name)
			.join(', ');

		waitFor(() => {
			expect(screen.getByText(`${courseAuthors}`)).toBeInTheDocument();
		});
	});
});
