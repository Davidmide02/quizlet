import Button from "./components/button/button";
import { Link } from "react-router-dom";
import quesIcon from "/src/assets/undraw_questions_re_1fy7.svg";
import { useState } from "react";

const Setquiz = () => {
 const [tst, settst] = useState(null)
  
  const category = [
    {
      title: "Anime",
      qs: "opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
    },

    {
      title: "General knowledge",
      qs: "opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
    },
    {
      title: "Science",
      qs: "opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    },

    {
      title: "Computer",
      qs: "opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    },
  ];
  const timeNum = [1, 2, 3];

  // const handleOpt = (x) => {
  //   console.log(x);
  //   alert(x)
  // };
  function handleOpt(params) {
    alert('okat')
    console.log(params);
    console.log(tst);
    
  }

  return (
    <div className="setquiz p-4 font-poppin h-screen ">
      <div className="text-center m-auto flex flex-col gap-2 items-center bg-slate-500">
        <img src={quesIcon} alt="img" className="w-[50%] md:w-[30%]" />
        <div className="texts bg-green-300 flex justify-between w-[50%]">
          <p className="mb-2">
            This quiz is to test your speed and accuracy. It contains a total
            number of 10 questions for each category. You can not go to the
            previous question, so you've to be accurate as much as you can.
          </p>

          <p>
            The time starts ticking immediately you start and submits
            automatically when you exceed it. If you did not set any category or
            time the default settings will be applied.
            <span className=" font-bold "> Goodluck!</span>
          </p>
        </div>
      </div>

      <div className="div grid grid-cols-1 justify-center items-center gap-10">
        <div className="sele flex justify-evenly gap-4 mb-2 md:justify-between">
          <div>
            <p>Categories</p>
            <select
              name=""
              id=""
              className="text-white bg-blue-950 outline-none p-2 font-poppin"
              placeholder="category"
            >
              {category.map((cate) => (
                <option
                  key={cate.title}
                  className="p-2"
                  onClick={() => console.log(cate.title)}
                >
                  {cate.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p>Time in min</p>
            <select
              name=""
              id=""
              className="text-white bg-blue-950 outline-none p-2"
            >
              {timeNum.map((num) => (
                <option key={num} onClick={()=>{handleOpt(num)}}>{num}</option>
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
  );
};

export default Setquiz;
