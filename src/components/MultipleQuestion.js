import React, { useContext } from "react";
import { QuestionContext } from "../components/QuestionProvider";
import QuestionInfoPanel from "./QuestionInfoPanel";

function MultipleQuestion(props) {

    const {questions} = useContext(QuestionContext);
    const question = questions[props.questionNumber - 1];

    const options = question.options.map((option, index) => (
        <div key={`${question.id}-${index}`} className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={`ans-${question.id}-${index}`}
                name={`q-${question.id}-${index}`} 
                onChange={e => question.ans[index] = (e.target.checked ? 1 : 0)}
            />
            <label className="form-check-label">
                <div dangerouslySetInnerHTML={{ __html: option }} />
            </label>
        </div>
    ));
    var difficultyText = <span className="badge bg-success">Facile</span>;
    if (question.weight > 2) {
        difficultyText = (question.weight < 5) ?
            <span className="badge bg-warning">Media</span> :
            <span className="badge bg-danger">Difficile</span>;
    }
    return (
        <div id={`question-${question.id}`} className="mx-3 my-2 py-2 px-4 border">
            <div className="py-1">
                <strong>Domanda {props.questionNumber}</strong>
                <br />{difficultyText}
                <div dangerouslySetInnerHTML={{ __html: question.text }} />
            </div>
            <div className="px-3">
                {options}
            </div>
            <QuestionInfoPanel
                maxPoints={question.weight}
                score={question.score}
            />
        </div>
    );

}

export default MultipleQuestion;
