import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";
import "./QuizPage.css";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 가짜 데이터 추가
    const fakeQuizzes = [
      {
        id: 1,
        question: "What is the capital of France?",
        answer: "Paris",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 2,
        question: "What is 2 + 2?",
        answer: "4",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 3,
        question: 'Who wrote "To be, or not to be"?',
        answer: "William Shakespeare",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 4,
        question: "What is the boiling point of water?",
        answer: "100°C",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        id: 5,
        question: "What is the speed of light?",
        answer: "299,792,458 m/s",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
    ];
    setQuizzes([
      {
        id: 0,
        question: "Create a new quiz",
        answer: "+",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      ...fakeQuizzes,
    ]);
  }, []);

  const handleCreateQuiz = () => {
    navigate("/create-quiz");
  };

  const handleQuizClick = quiz => {
    if (quiz.id === 0) {
      handleCreateQuiz();
    } else {
      setCurrentQuiz(quiz);
    }
  };

  return (
    <div className="container">
      <div className="quiz-list">
        {quizzes.map(quiz => (
          <div className={`quiz-card ${quiz.id === 0 ? "create-card" : ""}`} key={quiz.id} onClick={() => handleQuizClick(quiz)}>
            {quiz.id === 0 ? <div className="create-button">+</div> : <Quiz quiz={quiz} />}
          </div>
        ))}
      </div>
      {currentQuiz && <Quiz quiz={currentQuiz} />}
    </div>
  );
};

export default QuizPage;
