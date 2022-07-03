function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function preprocessQuestions(questions) {
    // select MAX_QUESTIONS questions (TODO)
    const processed = questions.map(q => { 
        return {...q, ans: null}
     });
    // Shuffle
    return shuffle(processed);
}

export { shuffle, preprocessQuestions };
