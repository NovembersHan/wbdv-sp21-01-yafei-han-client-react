import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

export default class CourseGrid
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 d-none d-md-block d-lg-block d-xl-block">
                        <h4>Recent Documents</h4>
                    </div>
                    <div className="col-4 d-none d-md-block d-lg-block d-xl-block">
                        <h4>
                            Owned by me
                            <i className="fas fa-sort-down"></i>
                        </h4>
                    </div>
                    <div className="col-sm-4 col-xs-4">
                        <div className="float-right">
                        <i className="fas fa-folder"></i>
                        <i className="fas fa-sort-alpha-up-alt m-sm-2"></i>
                        <Link to="/courses/table">
                            <i className="fas fa-list"></i>
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseCard
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                </div>
            </div>
        )
    }
}
