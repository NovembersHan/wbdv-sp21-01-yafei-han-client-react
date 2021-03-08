import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div className="container-fluid">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td className="d-none d-md-table-cell d-lg-table-cell d-xl-table-cell">Owned by</td>
                            <td className="d-none d-lg-block d-xl-block">Last modified</td>
                            <td>
                                <i className="fas fa-folder"></i>
                                <i className="fas fa-sort-alpha-up-alt m-sm-2"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th m-sm-2"></i>
                                </Link>
                            </td>
                        </tr>

                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}