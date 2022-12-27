import { coursesInitialState, coursesReducer } from '../courses/reducer';
import { SAVE_COURSE, GET_COURSES } from '../courses/actionTypes';
import '@testing-library/jest-dom';

const newCourse = {
	title: 'title',
	description: 'description',
	duration: 150,
};

const courses = [
	{
		title: 'title1',
		description: 'description1',
		duration: 150,
	},
	{
		title: 'title2',
		description: 'description2',
		duration: 160,
	},
];

describe('courses reducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual(coursesInitialState);
	});
	it('should handle SAVE_COURSE and returns new state', () => {
		expect(
			coursesReducer(undefined, {
				type: SAVE_COURSE,
				payload: newCourse,
			})
		).toEqual([...coursesInitialState, newCourse]);
	});
	it('should handle GET_COURSES and returns new state', () => {
		expect(
			coursesReducer(undefined, {
				type: GET_COURSES,
				payload: courses,
			})
		).toEqual([...courses]);
	});
});
