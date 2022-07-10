function QuestionInfoPanel(props) {
    const score = (props.score !== null) ? props.score : '-';
    return (
        <div>
            <span className="text-secondary" >Punti: {score} / {props.maxPoints}</span>
        </div>
    );
}

export default QuestionInfoPanel;
