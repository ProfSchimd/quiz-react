import React, { useContext } from "react";
import { QuestionContext } from "..";
import QuestionInfoPanel from "./QuestionInfoPanel";

// Question with one or more blank spaces to be filled.
// Each space is text area.
function FillQuestion(props) {

    const questions = useContext(QuestionContext);
    const question = questions[props.questionNumber - 1];

    var text = question.text;
    // control id is: 'questionId-number' where number is 0 to m-1
    for (var i = 0; i < question.correct.length; i++) {
        var searchPattern = `{{${i}}}`;
        var inputHTML = `<input type="text" id="ans-${question.id}-${i}" aria-label="input risposta">`
        text = text.replace(searchPattern, inputHTML);
    }
    var difficultyText = <span className="badge bg-success">Facile</span>;
    if (question.weight > 2) {
        difficultyText = (question.weight > 4) ?
            <span className="badge bg-warning">Media</span> :
            <span className="badge bg-danger">Difficile</span>;
    }
    return (
        <div id={`question-${question.id}`} className="mx-3 my-2 py-2 px-4 border">
            <div className="py-1">
                <strong>Domanda {props.questionNumber}</strong>
                <br />{difficultyText}
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <QuestionInfoPanel
                maxPoints={question.weight}
                score={null}
            />
        </div>
    );

}

export default FillQuestion;
