import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
        myTopics=[],
        createTopic=() => alert("Create Topic 234"),
        deleteTopic=(item) => alert("delete " + item._id),
        updateTopic,
        findTopicsForLesson=(lessonId) => console.log(lessonId)
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [lessonId])
    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    myTopics.map(topic =>
                        <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                <li className="nav-item">
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myTopics: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        deleteTopic: (item) =>
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })),
        findTopicsForLesson: (lessonId) => {
            // alert(lessonId);
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: theTopics
                }))
        }
    }
}

export default connect(stpm, dtpm)
(TopicPills)