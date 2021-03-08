import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
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
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
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
            </td>
            <td className="d-none d-md-table-cell d-lg-table-cell d-xl-table-cell">{owner}</td>
            <td className="d-none d-lg-block d-xl-block">{lastModified}</td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing &&
                    <div>
                        <i onClick={() => saveTitle()} className="fas fa-check"></i>
                        <i onClick={() => {deleteCourse(course); setEditing(false);}} className="fas fa-times"></i>
                    </div>
                }
            </td>
        </tr>
    )
}
export default CourseRow