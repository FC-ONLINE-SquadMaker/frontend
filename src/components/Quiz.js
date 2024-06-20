import React from "react";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  return (
    <div className="quiz-content">
      <img src={quiz.image} alt={quiz.question} className="quiz-image" />
      <h2 className="quiz-question">{quiz.question}</h2>
      <p className="quiz-answer">{quiz.answer}</p>
    </div>
  );
};

export default Quiz;
