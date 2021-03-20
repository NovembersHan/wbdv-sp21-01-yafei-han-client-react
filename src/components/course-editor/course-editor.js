import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";
import {findCourseById} from "../../services/course-service"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

// const store = createStore(modulesReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = (
    {
        title
    }) => {
    const {layout, courseId} = useParams();
    const [realTitle, setRealTitle] = useState(title)
    useEffect(() => {
        // alert(moduleId)
        findCourseById(courseId)
            .then(course => setRealTitle(course.title))
    }, [courseId])
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times"></i>
                    </Link>
                    {realTitle}
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor