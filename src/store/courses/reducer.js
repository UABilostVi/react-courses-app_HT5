import {
	GET_COURSES,
	DEL_COURSE,
	SAVE_COURSE,
	UPDT_COURSE,
} from './actionTypes';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case GET_COURSES:
			return [...action.payload];
		case SAVE_COURSE:
			return [...state, action.payload];
		case DEL_COURSE:
			return [
				...state.filter((course) => {
					return course.id !== action.payload;
				}),
			];
		case UPDT_COURSE:
			return [
				...state.filter((course) => course.id !== action.payload.id),
				action.payload,
			];
		default:
			return state;
	}
};
