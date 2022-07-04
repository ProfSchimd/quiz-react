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
        <SingleQuestion questionNumber={`${index + 1}`} />
      );
    case "multiple":
      return (
        <MultipleQuestion questionNumber={`${index + 1}`} />
      );
    case "fill":
      return (
        <FillQuestion questionNumber={`${index + 1}`} />
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
