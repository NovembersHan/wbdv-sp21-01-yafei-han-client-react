import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">
                        {
                            !editing &&
                            <Link to={`/courses/grid/edit/${course._id}`}>
                                {title}
                            </Link>
                        }
                        {
                            editing &&
                            <input
                                onChange={(event) => setNewTitle(event.target.value)}
                                value={newTitle}
                                className="form-control"/>
                        }
                    </h5>
                    <p className="card-text">Some description</p>
                    <img src={``}/>
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                        {title}
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
                    {editing &&
                    <div className="float-right">
                        <i onClick={() => saveTitle()} className="fas fa-check"></i>
                        <i onClick={() => {deleteCourse(course); setEditing(false);}} className="fas fa-times"></i>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCard