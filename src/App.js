import { useContext } from "react";
import { QuestionContext } from ".";
import Controls from "./components/Controls";
import FillQuestion from "./components/FillQuestion";
import MultipleQuestion from "./components/MultipleQuestion";
import SingleQuestion from "./components/SingleQuestion";
import TestComponent from "./components/TestComponent";

function makeComponent(question, index) {
  switch (question.type) {
    case "single":
      return (
        <SingleQuestion key={ index } questionNumber={`${index + 1}`} />
      );
    case "multiple":
      return (
        <MultipleQuestion key={ index } questionNumber={`${index + 1}`} />
      );
    case "fill":
      return (
        <FillQuestion key={ index } questionNumber={`${index + 1}`} />
      );
    default:
      break;
  }
  return null;
}

function App() {
  const questions = useContext(QuestionContext);
  return (
    <div>
      { questions.map(makeComponent) }
      <Controls
        id="check-button"
        checkButtonText="Verifica"
      />
    </div>
  );
}

export default App;
