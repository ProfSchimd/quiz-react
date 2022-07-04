import { useContext } from "react";
import { QuestionContext } from ".";
import Controls from "./components/Controls";
import FillQuestion from "./components/FillQuestion";
import MultipleQuestion from "./components/MultipleQuestion";
import SingleQuestion from "./components/SingleQuestion";

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
          weight={question.weight}
          onAnswer={f => f}
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
          weight={question.weight}
          onAnswer={f => console.log(`${index} ANS ${f}`)}
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
          weight={question.weight}
          onAnswer={f => f}
        />
      );
    default:
      break;
  }
  return null;
}

function App() {
  const questions = useContext(QuestionContext);
  const questionsComponents = questions.map(makeComponent);
  return (
    <div>
      {questionsComponents}
      <Controls
        id="check-button"
        checkButtonText="Verifica"
      />
    </div>
  );
}

export default App;
