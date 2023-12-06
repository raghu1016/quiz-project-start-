import { useState, useCallback } from "react";
import Questions from "../question";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestion =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isQuizOver = currentQuestion === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswers((prevAnswer) => [...prevAnswer, answer]);
  }, []);

  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (isQuizOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipQuestion}
      />
    </div>
  );
}
