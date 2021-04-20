import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [success, setSuccess] = useState(false)
    const [danger, setDanger] = useState(false)

    const toHighlight = () => {
        setDanger(false)
        setSuccess(false)
        if (yourAnswer !== question.correct) {
            setDanger(true)
        }
        setSuccess(true)
    }

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && success === true &&
                    <i className="fas fa-check float-right wbdv-color-green"></i>
                }
                {
                    question.correct !== yourAnswer && danger === true &&
                    <i className="fas fa-times float-right wbdv-color-red"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${yourAnswer === choice && danger === true ? 'list-group-item-danger' : ''} 
                            ${question.correct === choice && success === true ? 'list-group-item-success' : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                        question.answer = choice
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                                {
                                    question.correct === choice && success === true &&
                                    <i className="fas fa-check float-right wbdv-color-green"></i>
                                }
                                {
                                    yourAnswer === choice && danger === true &&
                                    <i className="fas fa-times float-right wbdv-color-red"></i>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            <p onClick={() => toHighlight()} className="btn btn-success">
                Grade
            </p>
        </div>
    )
}

export default MultipleChoiceQuestion