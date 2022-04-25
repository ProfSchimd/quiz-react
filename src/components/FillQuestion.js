import React from "react";

class FillQuestion extends React.Component {

    render() {
        var text = this.props.text;
        for (var i = 0; i < this.props.correct.length; i++) {
            var searchPattern = `{{${i}}}`;
            var inputHTML = `<input type="text" id="ans-${this.props.id}-${i}" aria-label="input risposta">`
            text = text.replace(searchPattern, inputHTML);
        }
        return (
            <div id={`question-${this.props.id}`} className="mx-3 my-2 py-2 px-4 border">
                <div className="py-1">
                    {this.props.questionNumber}. <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        );
    }
}

export default FillQuestion;
