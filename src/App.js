import { useContext } from "react";
import { QuestionContext } from "./components/QuestionProvider";
import Controls from "./components/Controls";
import FillQuestion from "./components/FillQuestion";
import MultipleQuestion from "./components/MultipleQuestion";
import SingleQuestion from "./components/SingleQuestion";

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
  const {questions} = useContext(QuestionContext);
  console.log(questions);
  return (
    <div> 
      {questions ? questions.map(makeComponent) : "No data"}
      <Controls
        id="check-button"
        checkButtonText="Verifica"
      />
      
    </div>
  );
}

export default App;
