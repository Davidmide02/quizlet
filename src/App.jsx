import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Button from "./components/button";
import Question from "./components/question";
import Result from "./components/result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body text-center text-blue-950 font-nato">
      <Header />
      <div className="mt-4 bg-red-500 md:grid md:grid-cols-2 md:item-end ">
        <Button
          className={
            "border-2 border-blue-950 outline-none  py-1 px-2 rounded-lg text-blue-950 font-medium mr-2"
          }
          Children={"sign up"}
        />
        <Button
          className={
            "bg-blue-950 outline-none py-2 px-4 rounded-lg text-white font-medium"
          }
          Children={"log In"}
        />
      </div>
      <Home />
      {/* <h1 className="text-blue-950 font-extrabold text-2xl">
        Hello Tailwindcss
      </h1> */}
      <Question/>
      <Result/>
    </div>
  );
}

export default App;
