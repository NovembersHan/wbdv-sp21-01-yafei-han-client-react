// import React, {useEffect} from 'react'
// import {connect} from "react-redux";
// import EditableItem from "../editable-item";
// import {useParams} from "react-router-dom";
// import lessonService from '../../services/lesson-service'
//
// const LessonTabs = (
//     {
//         lessons=[
//             {_id: "123", title: "Lesson A"},
//             {_id: "123", title: "Lesson B"},
//             {_id: "123", title: "Lesson C"}
//         ],
//         findLessonsForModule,
//         createLessonForModule,
//         deleteLesson,
//         updateLesson
//     }) => {
//     const {layout, courseId, moduleId, lessonId} = useParams();
//     useEffect(() => {
//         console.log("LOAD LESSONS FOR MODULE: " + moduleId)
//         if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
//             findLessonsForModule(moduleId)
//         }
//     }, [moduleId])
//     return(
//         <div>
//             <h2>Lessons</h2>
//             <ul className="nav nav-tabs">
//                 {
//                     lessons.map(lesson =>
//                         <li className="nav-item">
//                             <EditableItem
//                                 active={lesson._id === lessonId}
//                                 to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
//                                 updateItem={updateLesson}
//                                 deleteItem={deleteLesson}
//                                 item={lesson}/>
//                         </li>
//                     )
//                 }
//                 <li className="nav-item">
//                     <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus fa-2x"></i>
//                 </li>
//             </ul>
//         </div>)}
//
// const stpm = (state) => ({
//     lessons: state.lessonReducer.lessons
// })
// const dtpm = (dispatch) => ({
//     findLessonsForModule: (moduleId) => {
//         console.log("LOAD LESSONS FOR MODULE:")
//         console.log(moduleId)
//         lessonService.findLessonsForModule(moduleId)
//             .then(lessons => dispatch({
//                 type: "FIND_LESSONS",
//                 lessons
//             }))
//     },
//     createLessonForModule: (moduleId) => {
//         console.log("CREATE LESSON FOR MODULE: " + moduleId)
//         lessonService
//             .createLessonForModule(moduleId, {title: "New Lesson"})
//             .then(lesson => dispatch({
//                 type: "CREATE_LESSON",
//                 lesson
//             }))
//     },
//     deleteLesson: (item) => {
//         lessonService.deleteLesson(item._id)
//             .then(status => dispatch({
//                 type: "DELETE_LESSON",
//                 lessonToDelete: item
//             }))
//     },
//     updateLesson: (lesson) =>
//         lessonService.updateLesson(lesson._id, lesson)
//             .then(status => dispatch({
//                 type: "UPDATE_LESSON",
//                 lesson
//             }))
// })
//
// export default connect(stpm, dtpm)(LessonTabs)

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        myLessons=[],
        createLesson=() => alert("Create Lesson 234"),
        deleteLesson=(item) => alert("delete " + item._id),
        updateLesson,
        findLessonsForModule=(moduleId) => console.log(moduleId)
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        // alert(moduleId)
        findLessonsForModule(moduleId)
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-tabs">
                {
                    myLessons.map(lesson =>
                        <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                active={true}
                                item={lesson}/>
                        </li>
                    )
                }
                <li className="nav-item">
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}
const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))
        },
        deleteLesson: (item) =>
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                })),
        findLessonsForModule: (moduleId) => {
            // alert(moduleId);
            lessonService.findLessonsForModule(moduleId)
                .then(theLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: theLessons
                }))
        }
    }
}

export default connect(stpm, dtpm)
(LessonTabs)