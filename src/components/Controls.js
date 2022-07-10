function Controls(props) {
    return (
        <div className="px-3 py-2">
            <input 
                id={props.id}
                type="button"
                value={props.checkButtonText}
                onClick={e =>props.onCheckAnswer()}
                
            />
            <input 
                id={`reset-${props.id}`}
                type="button"
                value="Reset"
                onClick={f => f}
                className="mx-1"
            />
        </div>
    );
}

export default Controls;
