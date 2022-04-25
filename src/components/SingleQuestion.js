import React from "react";
import shuffle from "../util";

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
                    <div dangerouslySetInnerHTML={{__html: option}} />
                </label>
            </div>
        )));
        
        return (
            <div id={`question-${this.props.id}`} className="mx-3 my-2 py-2 px-4 border">
                <div className="py-1">
                    {this.props.questionNumber}. {this.props.text}
                </div>
                <div className="px-3">
                    {options}
                </div>
            </div>
        );
    }
}

export default SingleQuestion;
