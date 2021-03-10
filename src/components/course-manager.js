import React, {useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            courses: [],
            qwe: 123,
            sdf: 456,
            addCourse: null
        };
    }

    handleChange(e) {
        this.setState({addCourse: e.target.value});
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.state.addCourse,
            owner: "me",
            lastModified: "1/1/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))

        this.state.addCourse = ""
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="col-3 d-none d-lg-block d-xl-block">
                        <h2>Course Manager</h2>
                    </div>
                    <div className="col-7">
                        <input onChange={this.handleChange}
                               value={this.state.addCourse}
                               className="form-control"/>
                    </div>
                    <div className="col-1">
                        <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x wbdv-color-red"></i>
                    </div>
                </div>
                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <i onClick={this.addCourse} className="fas fa-5x fa-plus-circle wbdv-bottom-right wbdv-color-red"></i>
            </div>
        )
    }
}

export default CourseManager