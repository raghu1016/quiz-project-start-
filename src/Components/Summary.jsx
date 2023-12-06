import Question from "./Question";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Question[index].answer[0],
  );
  const skippedPercentage =
    Math.round(skippedAnswers.length / Question.length) * 100;
  const correctPercentage =
    Math.round(correctAnswers.length / Question.length) * 100;
  const wrongPercentage = 100 - correctPercentage - skippedPercentage;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete Logo" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>

        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else {
            if (answer === Question[index].answer[0]) {
              cssClasses += " correct";
            } else {
              cssClasses += " wrong";
            }
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Question[index].text}</p>
              <p className="user-answer">{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
