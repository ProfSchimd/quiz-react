import { useContext } from "react";
import { QuestionContext } from "./components/QuestionProvider";
import Controls from "./components/Controls";
import FillQuestion from "./components/FillQuestion";
import MultipleQuestion from "./components/MultipleQuestion";
import SingleQuestion from "./components/SingleQuestion";
import { verifyQuestion } from "./util";

function makeComponent(question, index) {
  switch (question.type) {
    case "single":
      return (
        <SingleQuestion key={index} questionNumber={`${index + 1}`} />
      );
    case "multiple":
      return (
        <MultipleQuestion key={index} questionNumber={`${index + 1}`} />
      );
      case "invertible":
        return (
          <MultipleQuestion key={index} questionNumber={`${index + 1}`} />
        );
    case "fill":
      return (
        <FillQuestion key={index} questionNumber={`${index + 1}`} />
      );
    default:
      break;
  }
  return null;
}

function App() {
  const { questions, setQuestions } = useContext(QuestionContext);
  
  return (
    <div>

      {questions ? questions.map(makeComponent) : "No data"}
      <Controls
        id="check-button"
        checkButtonText="Verifica"
        onCheckAnswer={e => {
          setQuestions(questions.map(q => verifyQuestion(q)));
        }}
      />
      <p>Total Score: {questions ? questions.map(q => q.score).reduce((p,c) => p+c)  : '-'}</p>
    </div>
  );
}

export default App;
