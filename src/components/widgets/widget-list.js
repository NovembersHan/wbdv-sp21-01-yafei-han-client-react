import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService from "../../services/widget-service";
import {connect} from "react-redux";

const WidgetList = (
    {
        myWidgets=[],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
    const {topicId} = useParams()
    const [widget, setWidget] = useState({})
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])


    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    myWidgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => deleteWidget(_widget)} className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(widget)
                                        setWidget({})
                                    }} className="fas fa-check float-right"></i>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => {
                                    setWidget(_widget)
                                }} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.id !== widget.id && _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.id !== widget.id && _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.id === widget.id && _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                _widget.id === widget.id && _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        myWidgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(theActualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: theActualWidget
                }))
        },
        deleteWidget: (item) =>
            widgetService.deleteWidget(item.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: item
                })),
        updateWidget: (widget) =>
            widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget
                })),
        findWidgetsForTopic: (tid) => {
            widgetService.findWidgetsForTopic(tid)
                .then(theWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                    widgets: theWidgets
                }))
        }
    }
}

export default connect(stpm, dtpm)
(WidgetList)