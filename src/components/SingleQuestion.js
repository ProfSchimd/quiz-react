import React from "react";
import shuffle from "../util";
import QuestionInfoPanel from "./QuestionInfoPanel";

class SingleQuestion extends React.Component {

    render() {
        const options = shuffle(this.props.options.map((option, index) => (
            <div key={`${this.props.id}-${index}`} className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    id={`ans-${this.props.id}-${index}`}
                    name={`q-${this.props.id}-${index}`} />
                <label className="form-check-label">
                    <div dangerouslySetInnerHTML={{ __html: option }} />
                </label>
            </div>
        )));
        var difficultyText = <span className="badge bg-success">Facile</span>;
        if (this.props.weight > 2) {
            difficultyText = (this.props.weight > 4) ?
                <span className="badge bg-warning">Media</span> :
                <span className="badge bg-danger">Difficile</span>;
        }
        return (

            <div id={`question-${this.props.id}`} className="mx-3 my-2 py-2 px-4 border">
                <div className="py-1">
                    <strong>Domanda {this.props.questionNumber}</strong>
                    <br />{difficultyText}
                    <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
                </div>
                <div className="px-3">
                    {options}
                </div>
                <QuestionInfoPanel
                    maxPoints={this.props.weight}
                    score={null}
                />
            </div>
        );
    }
}

export default SingleQuestion;
