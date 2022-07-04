import React from "react";
import QuestionInfoPanel from "./QuestionInfoPanel";

function SingleQuestion(props) {

    const options = props.options.map((option, index) => (
        <div key={`${props.id}-${index}`} className="form-check">
            <input
                className="form-check-input"
                type="radio"
                id={`ans-${props.id}-${index}`}
                name={`q-${props.id}`}
                onChange={f => console.log(index)}
            />
            <label className="form-check-label">
                <div dangerouslySetInnerHTML={{ __html: option }} />
            </label>
        </div>
    ));
    var difficultyText = <span className="badge bg-success">Facile</span>;
    if (props.weight > 2) {
        difficultyText = (props.weight > 4) ?
            <span className="badge bg-warning">Media</span> :
            <span className="badge bg-danger">Difficile</span>;
    }
    return (

        <div id={`question-${props.id}`} className="mx-3 my-2 py-2 px-4 border">
            <div className="py-1">
                <strong>Domanda {props.questionNumber}</strong>
                <br />{difficultyText}
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
            <div className="px-3">
                {options}
            </div>
            <QuestionInfoPanel
                maxPoints={props.weight}
                score={null}
            />
        </div>
    );

}

export default SingleQuestion;
