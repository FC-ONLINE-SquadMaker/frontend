import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import Placeholder from "./components/Placeholder";
import KakaoLoginButton from "./components/KakaoLoginButton";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <header className="header">
          <p>🌟QuizBox🌟</p>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/upcoming">CS퀴즈</Link>
              </li>
              <li>
                <Link to="/digital">문의하기</Link>
              </li>
              <li>
                <Link to="/studio">개발진</Link>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <KakaoLoginButton />
            <div className="search-box">
              <input type="text" placeholder="검색어를 입력해주세요." />
              <button className="search-button">🔍</button>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<QuizPage />} />
            <Route path="/cs-quiz" element={<Placeholder />} />
            <Route path="/contact" element={<Placeholder />} />
            <Route path="/create-quiz" element={<CreateQuizPage />} />
            <Route path="/categories" element={<Placeholder />} />
            <Route path="/new" element={<Placeholder />} />
            <Route path="/upcoming" element={<Placeholder />} />
            <Route path="/digital" element={<Placeholder />} />
            <Route path="/studio" element={<Placeholder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
