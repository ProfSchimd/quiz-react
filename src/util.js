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

function processQuestion(q) {
    let answers = null;
    // TODO shuffle options (!! correct vector !!)
    switch (q.type) {
        case "single":
            answers = q.options.map(o => false);
            break;
        case "multiple":
            answers = q.correct.map(c => false);
            break;
        case "fill":
            answers = q.correct.map(c => "");
            break;
        default:
            break;
    }
    return {...q, ans: answers};
}

function preprocessQuestions(questions) {
    // select MAX_QUESTIONS questions (TODO)
    const processed = questions.map(q =>  processQuestion(q));
    // Shuffle
    return shuffle(processed);
}

export { shuffle, preprocessQuestions };
