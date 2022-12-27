import { serviceAPI } from '../../services';
import {
	getCoursesAction,
	delCourseAction,
	saveCourseAction,
	updateCourseAction,
} from './actionCreators';

export const getCourses = () => {
	return (dispatch) => {
		serviceAPI
			.fetchAllCourses()
			.then((res) => {
				dispatch(getCoursesAction(res.data.result));
			})
			.catch((err) => {
				console.log('CoursesThunk', err.message);
			});
	};
};

export const delCourse = (courseId) => {
	return (dispatch) => {
		serviceAPI
			.fetchDelCourse(courseId)
			.then((res) => {
				if (res.status === 200) {
					dispatch(delCourseAction(courseId));
				}
			})
			.catch((err) => {
				console.log('delCourse', err.message);
			});
	};
};

export const createCourse = (course) => {
	return (dispatch) => {
		serviceAPI
			.fetchCreateCourse(course)
			.then((res) => {
				if (res.status === 201) {
					dispatch(saveCourseAction(res.data.result));
				}
			})
			.catch((err) => {
				console.log('createCourse', err.message);
			});
	};
};

export const updateCourse = (data, courseId) => {
	return (dispatch) => {
		serviceAPI
			.fetchUpdateCourse(data, courseId)
			.then((res) => {
				if (res.status === 200) {
					dispatch(updateCourseAction(res.data.result));
				}
			})
			.catch((err) => {
				console.log('updateCourse', err.message);
			});
	};
};
