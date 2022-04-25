import Controls from "./components/Controls";
import FillQuestion from "./components/FillQuestion";
import MultipleQuestion from "./components/MultipleQuestion";
import SingleQuestion from "./components/SingleQuestion";
import shuffle from "./util";

function makeComponent(question, index) {
  switch (question.type) {
    case "single":
      return (
        <SingleQuestion
          id={question.id}
          key={question.id}
          questionNumber={`${index + 1}`}
          text={question.text}
          options={question.options}
          correct={question.correct}
        />
      );
    case "multiple":
      return (
        <MultipleQuestion
          id={question.id}
          key={question.id}
          questionNumber={`${index + 1}`}
          text={question.text}
          options={question.options}
          correct={question.correct}
        />
      );
    case "fill":
      return (
        <FillQuestion
          id={question.id}
          key={question.id}
          questionNumber={`${index + 1}`}
          text={question.text}
          correct={question.correct}
        />
      );
    default:
      break;
  }
  return null;
}

// TODO: Change to object so to leverage component lifecycle
function App(props) {
  // (1) select MAX_QUESTIONS questions (TODO)
  // Select (TODO)
  const filteredQuestions = shuffle(props.questions); // ...and randomize
  // (2) map each selected question to the proper component type
  const questions = filteredQuestions.map(makeComponent);
  // (3) render the components
  return (
    <div>
      {questions}
      <Controls
        id="check-button"
        checkButtonText="Verifica"
        onCheckAnswers={onCheckAnswers}
      />
    </div>
  );
}

export default App;
