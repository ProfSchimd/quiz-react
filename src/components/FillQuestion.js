import React from "react";
import QuestionInfoPanel from "./QuestionInfoPanel";

class FillQuestion extends React.Component {

    render() {
        var text = this.props.text;
        for (var i = 0; i < this.props.correct.length; i++) {
            var searchPattern = `{{${i}}}`;
            var inputHTML = `<input type="text" id="ans-${this.props.id}-${i}" aria-label="input risposta">`
            text = text.replace(searchPattern, inputHTML);
        }
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
                    <div dangerouslySetInnerHTML={{ __html: text}} />
                </div>
                <QuestionInfoPanel
                    maxPoints={this.props.weight}
                    score={null}
                />
            </div>
        );
    }
}

export default FillQuestion;
