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
            answers = q.options.map(o => 0);
            break;
        case "multiple":
            answers = q.correct.map(c => 0);
            break;
        case "fill":
            answers = q.correct.map(c => "");
            break;
        default:
            break;
    }
    return {...q, ans: answers, score: null};
}

function preprocessQuestions(questions) {
    // select MAX_QUESTIONS questions (TODO)
    const processed = questions.map(q =>  processQuestion(q));
    // Shuffle
    return shuffle(processed);
}

function verifyQuestion(question) {
    // console.log("Id: ", question.id);
    // console.log(question.ans);
    // console.log(question.correct);
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
