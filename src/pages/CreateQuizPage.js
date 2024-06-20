import React, { useState } from "react";

const CreateQuizPage = () => {
  const [quizzes, setQuizzes] = useState([{ question: "", answer: "" }]);

  const handleAddQuiz = () => {
    setQuizzes([...quizzes, { question: "", answer: "" }]);
  };

  const handleChange = (index, event) => {
    const newQuizzes = quizzes.map((quiz, i) => {
      if (i === index) {
        return { ...quiz, [event.target.name]: event.target.value };
      }
      return quiz;
    });
    setQuizzes(newQuizzes);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted quizzes:", quizzes);
    // 여기에 서버로 퀴즈 데이터를 전송하는 코드를 추가할 수 있습니다.
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        {quizzes.map((quiz, index) => (
          <div key={index}>
            <label>
              Question:
              <input type="text" name="question" value={quiz.question} onChange={e => handleChange(index, e)} />
            </label>
            <label>
              Answer:
              <input type="text" name="answer" value={quiz.answer} onChange={e => handleChange(index, e)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddQuiz}>
          + Add Quiz
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateQuizPage;
