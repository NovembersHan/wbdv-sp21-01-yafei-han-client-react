import React from "react";

const TrueFalseQuestion = ({question}) => {
    return(
        <div>
            <h5>{question.question}</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <label><input type="radio" name={question._id}/> True</label>
                </li>
                <li className="list-group-item">
                    <label><input type="radio" name={question._id}/> False</label>
                </li>
            </ul>
        </div>
    )
}

export default TrueFalseQuestion