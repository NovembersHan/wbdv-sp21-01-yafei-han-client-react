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

    // state = {
    //     courses: [],
    //     qwe: 123,
    //     sdf: 456
    // }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
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
        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

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
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor {...props}/>}>*/}
                {/*</Route>*/}
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"]}
                    exact={true}
                    render={(props) => <CourseEditor {...props}/>}>
                </Route>
                <i onClick={this.addCourse} className="fas fa-5x fa-plus-circle wbdv-bottom-right wbdv-color-red"></i>
            </div>
        )
    }
}

export default CourseManager