import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
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
                <li className={`list-group-item
                            ${yourAnswer === "true" && danger === true ? 'list-group-item-danger' : ''} 
                            ${question.correct === "true" && success === true ? 'list-group-item-success' : ''}`}>
                    <label><input
                        onClick={() => {
                            setYourAnswer("true")
                            question.answer = "true"
                        }}
                        type="radio"
                        name={question._id}/> True</label>
                    {
                        question.correct === "true" && success === true &&
                        <i className="fas fa-check float-right wbdv-color-green"></i>
                    }
                    {
                        yourAnswer === "true" && danger === true &&
                        <i className="fas fa-times float-right wbdv-color-red"></i>
                    }
                </li>
                <li className={`list-group-item
                            ${yourAnswer === "false" && danger === true ? 'list-group-item-danger' : ''} 
                            ${question.correct === "false" && success === true ? 'list-group-item-success' : ''}`}>
                    <label><input
                        onClick={() => {
                            setYourAnswer("false")
                            question.answer = "false"
                        }}
                        type="radio"
                        name={question._id}/> False</label>
                    {
                        question.correct === "false" && success === true &&
                        <i className="fas fa-check float-right wbdv-color-green"></i>
                    }
                    {
                        yourAnswer === "false" && danger === true &&
                        <i className="fas fa-times float-right wbdv-color-red"></i>
                    }
                </li>
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

export default TrueFalseQuestion