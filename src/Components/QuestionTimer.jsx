import { useState, useEffect } from "react";

export default function QuestionTimer({ timer, timeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const cleartimeout = setTimeout(() => {
      timeout();
    }, timer);
    return () => {
      clearTimeout(cleartimeout);
    };
  }, [timeout, timer]);

  useEffect(() => {
    const clearinterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(clearinterval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timer}
      value={remainingTime}
      className={mode}
    />
  );
}
