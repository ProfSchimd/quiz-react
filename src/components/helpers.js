function classForOption(q, i) {
    if (q.score === null) {
      return "form-check-input";
    }
    if (q.ans[i] === q.correct[i]) {
        return "form-check-input is-valid";
    }
    return "form-check-input is-invalid";
}

export {classForOption};