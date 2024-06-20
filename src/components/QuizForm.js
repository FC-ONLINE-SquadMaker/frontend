import React, { useState } from "react";

const QuizForm = ({ addQuiz }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addQuiz({ question });
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
      </div>
      <button type="submit">Add Quiz</button>
    </form>
  );
};

export default QuizForm;
