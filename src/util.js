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
    // These are the vectors that need to be consistently shuffled:
    //   options, correct, review
    // Strategy: create an array with shuffled indexes and make e copy
    const shuffledIndex = shuffle(q.correct.map((c,i) => i));
    var newCorrect = q.correct.map(c => c);
    var newOptions = q.options ? q.options.map(o => o) : null;
    var newReview = q.review ? q.review.map(r => r) : null;
    switch (q.type) {
        case "single":
            answers = q.options.map(o => 0);
            newCorrect = q.correct.map((c,i) => q.correct[shuffledIndex[i]]);
            newOptions = q.options.map((c,i) => q.options[shuffledIndex[i]]);
            if (q.review) {
                newReview = q.review.map((r,i )=> q.review[shuffledIndex[i]]);
            }
            break;
        case "multiple":
            answers = q.correct.map(c => 0);
            newCorrect = q.correct.map((c,i) => q.correct[shuffledIndex[i]]);
            newOptions = q.options.map((c,i) => q.options[shuffledIndex[i]]);
            break;
        case "fill":
            answers = q.correct.map(c => "");
            break;
        default:
            break;
    }
    return {...q, options: newOptions, correct: newCorrect, review: newReview, ans: answers, score: null};
}

function preprocessQuestions(questions, maxQuestion = 500) {
    const processed = questions.map(q =>  processQuestion(q));
    // Shuffle and select maximum number of questions
    maxQuestion = maxQuestion > questions.length ? questions.length : maxQuestion;
    return shuffle(processed).slice(0,maxQuestion);
}

function verifyQuestion(question) {
    var correctCount = 0;
    switch (question.type) {
        case "fill":
            correctCount = 0;
            for (let i = 0; i < question.ans.length; i++) {
                correctCount += (question.ans[i] === question.correct[i] ? 1 : 0)
            }
            question.score = (correctCount / question.correct.length) * question.weight;
            break;
        case "single":
            correctCount = 0;
            for (let i = 0; i < question.ans.length; i++) {
                correctCount += question.ans[i] * question.correct[i];   
            }
            question.score = correctCount * question.weight;
            break;
        case "multiple":
            correctCount = 0;
            for (let i = 0; i < question.ans.length; i++) {
                if(question.ans[i] === question.correct[i]) {
                    correctCount++;
                } else {
                    correctCount--;
                }
                
            }
            question.score = (correctCount / question.correct.length) * question.weight;
            break;
        default:
            break;
    }
    return question
}

export { shuffle, preprocessQuestions, verifyQuestion };
