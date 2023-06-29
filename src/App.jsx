import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Button from "./components/button/button";
import Question from "./components/question";
import Result from "./components/result";
import { Routes, Route } from "react-router-dom";
import NotFound from "./notFound";
import Setquiz from "./setquiz";

function App() {
  const [user, setUser] = useState(null);
  // const timeObject = new Date().setMinutes(2);
  // console.log(timeObject);
  // // counter timer

  // const newDate = new Date();
  // const year = newDate.getFullYear();
  // const month = newDate.getMonth();
  // const day = newDate.getDay();
  // const min = newDate.getMinutes();
  // const sec = newDate.getSeconds();
  // // newDate.getUTCDay()
  // const next = newDate.getDate();
  // console.log(next);
  // console.log(year +':'+month + ':' +day+ ':' + min +':'+ sec);

  return (
    <>
      <Header />
      <main className="body h-screen text-center text-blue-950 font-nato pt-2 flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home setUser={setUser} user={user} />} />
          <Route path="/setquiz" element={<Setquiz />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
