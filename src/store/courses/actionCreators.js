import {
	GET_COURSES,
	DEL_COURSE,
	SAVE_COURSE,
	UPDT_COURSE,
} from './actionTypes';

export const getCoursesAction = (payload) => ({ type: GET_COURSES, payload });
export const delCourseAction = (payload) => ({ type: DEL_COURSE, payload });
export const saveCourseAction = (payload) => ({ type: SAVE_COURSE, payload });
export const updateCourseAction = (payload) => ({ type: UPDT_COURSE, payload });
