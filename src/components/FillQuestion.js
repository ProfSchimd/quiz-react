import React, { useContext } from "react";
import { QuestionContext } from "../components/QuestionProvider";
import QuestionInfoPanel from "./QuestionInfoPanel";

// Question with one or more blank spaces to be filled.
// Each space is text area.
function FillQuestion(props) {

    const {questions} = useContext(QuestionContext);
    const question = questions[props.questionNumber - 1];
    
    const tokens = question.tofill.split(/\{\{\d\}\}/);
    const last = tokens.pop();
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
                
                <p>
                <span dangerouslySetInnerHTML={{ __html: question.text }} /><br/>
                    {tokens.map((t, i) => {
                        return (
                            <span key={i}>
                                <span key={`s${i}`} dangerouslySetInnerHTML={{ __html: t }} />
                                <input type="text" onChange={e =>  {
                                    question.ans[i] = e.target.value;
                                    console.log(question.ans[i]);
                                    }}/>
                            </span>
                        );
                    })}
                    <span key={"-1"} dangerouslySetInnerHTML={{ __html: last }} />
                </p>
            </div>
            <QuestionInfoPanel
                maxPoints={question.weight}
                score={question.score}
            />
        </div>
    );

}

export default FillQuestion;
