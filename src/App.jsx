import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Question from "./components/question";
import Result from "./components/result";
import { Routes, Route } from "react-router-dom";
import NotFound from "./notFound";
import Setquiz from "./setquiz";

const App = () => {
  const [user, setUser] = useState(null);
  const [questionCategory, setQuestionCategory] = useState(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  );
  const [score, setScore] = useState(0);

  return (
    <>
      <Header />
      <main className="body h-screen text-center text-blue-950 font-nato pt-2 flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home setUser={setUser} user={user} />} />
          <Route
            path="/setquiz"
            element={
              <Setquiz
                setQuestionCategory={setQuestionCategory}
                questionCategory={questionCategory}
              />
            }
          />
          <Route
            path="/question"
            element={
              <Question
                setQuestionCategory={setQuestionCategory}
                questionCategory={questionCategory}
                setScore={setScore}
                score={score}
              />
            }
          />
          <Route
            path="/result"
            element={<Result user={user} score={score} setScore={setScore} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
