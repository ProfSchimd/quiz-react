function Controls(props) {
    return (
        <div className="px-3 py-2">
            <input 
                id={props.id}
                type="button"
                value={props.checkButtonText}
                onClick={props.onCheckAnswers}
            />
        </div>
    );
}

export default Controls;
