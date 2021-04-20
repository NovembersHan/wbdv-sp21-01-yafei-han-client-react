import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import {findQuestionsForQuiz} from "../../services/question-service"
import {findQuizById, submitQuiz, findAttemptsForQuiz} from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState("")
    const [attempts, setAttempts] = useState([])
    // const [score, setScore] = useState(0)
    useEffect(() => {
        findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
        findQuizById(quizId)
            .then(quiz => setTitle(quiz.title))
        findAttemptsForQuiz(quizId)
            .then((attempts) => {
                setAttempts(attempts)
            })
    }, [quizId])

    const toSubmit = () => {
        submitQuiz(quizId, questions)
            // .then((questions) => {
            //     setScore(questions.score)
            // })
        findAttemptsForQuiz(quizId)
            .then((attempts) => {
                setAttempts(attempts)
            })
    }

    return(
        <div>
            <h3>{title}</h3>
            <ul className="list-group">
                {
                    attempts.map((attempt) => {
                        return(
                            <li className="list-group-item">
                                Attempt: score {attempt.score}
                            </li>
                        )
                    })
                }
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
            <p onClick={() => toSubmit()} className="btn btn-primary">
                Submit
            </p>
        </div>
    )
}

export default Quiz;