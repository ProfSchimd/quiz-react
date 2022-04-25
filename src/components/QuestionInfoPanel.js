function QuestionInfoPanel(props) {
    const score = (props.score) ? props.score : '-';
    return (
        <div>
            <span className="text-secondary" >Punti: {score} / {props.maxPoints}</span>
        </div>
    );
}

export default QuestionInfoPanel;
