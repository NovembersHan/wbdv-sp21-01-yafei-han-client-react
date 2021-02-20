const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001359498/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const deleteCourse = (id) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllCourses,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse: updateCourse
}