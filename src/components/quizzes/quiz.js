import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import {findQuestionsForQuiz} from "../../services/question-service"
import {findQuizById} from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState("")
    useEffect(() => {
        findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
        findQuizById(quizId)
            .then(quiz => setTitle(quiz.title))
    }, [quizId])

    return(
        <div>
            <h3>{title}</h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;