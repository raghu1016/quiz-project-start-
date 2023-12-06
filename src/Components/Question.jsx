import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react/cjs/react.production.min";
import Questions from "./Questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timetr = 10000;

  if (answer.selectedAnswer) {
    timetr = 1000;
  }

  if (answer.isCorrect !== null) {
    timetr = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: Questions[index].answers[0] === answer,
      });
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timer={timer}
        timeout={answer.selectAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{Questions[index].text}</h2>
      <Answers
        answers={Questions[index].answers}
        selectAnswer={answer.selectedAnswer}
        answderState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
