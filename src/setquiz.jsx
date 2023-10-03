import Button from "./components/button/button";
import { Link } from "react-router-dom";
import quesIcon from "/src/assets/undraw_questions_re_1fy7.svg";
import { useState } from "react";

const Setquiz = ({ setQuestionCategory, timeLeft, setTimeLeft }) => {
  const category = [
    {
      title: "General knowledge",
      qs: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
    },
    {
      title: "Anime",
      qs: "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
    },

    {
      title: "Science",
      qs: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    },

    {
      title: "Computer",
      qs: "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
    },
  ];
  const timeNum = [10, 20, 30, 40];

  return (
    <div className="setquiz p-4 font-poppin h-screen">
      <div className="text-center">
        <img src={quesIcon} alt="img" className="w-[50%] md:w-[30%] m-auto" />
        <div className="texts flex flex-col items-center mt-3 gap-2 p-2 justify-center md:flex-row md:justify-between">
          <p className="md:w-[40%]">
            This quiz is to test your speed and accuracy. It contains a total
            number of 10 questions for each category. You can not go to the
            previous question, so you've to be accurate as much as you can.
          </p>

          <p className="md:w-[40%]">
            The time starts ticking immediately you start and submits
            automatically when you exceed it. If you did not set any category or
            time the default settings will be applied.
            <span className=" font-bold "> Goodluck!</span>
          </p>
        </div>

        {/* selects and start button container */}
        <div className="container m-auto">
          <div className="sele flex flex-col md:gap-4 md:p-2 md:flex-row md:justify-between">
            <div className="p-2 mx-4 flex items-center justify-between">
              <p className="font-bold md:mr-2">Categories</p>

              <select
                name=""
                id=""
                className="text-white bg-blue-950 outline-none p-2 font-poppin"
                placeholder="category"
                onChange={(e) => {
                  setQuestionCategory(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                {category.map((cate) => (
                  <option key={cate.title} className="p-2" value={cate.qs}>
                    {cate.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-2 mx-4 flex items-center justify-between">
              <p className="font-bold md:mr-2">Time in sec</p>
              <select
                name=""
                id=""
                className="text-white bg-blue-950 outline-none p-2"
                onChange={(e) => {
                  setTimeLeft(e.target.value);
                  // console.log(timeLeft);
                }}
              >
                {timeNum.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Link to={"/question"}>
            <Button
              Children={"Start quiz"}
              className={
                "px-3 py-1 border-2 rounded mt-4 border-blue-950 hover:bg-blue-950 hover:text-white md:m-auto md:w-[20%]"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setquiz;
