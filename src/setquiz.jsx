import Button from "./components/button/button";
import { Link } from "react-router-dom";
import quesIcon from "/src/assets/undraw_questions_re_1fy7.svg";

const Setquiz = () => {
  const category = ["Anime", "General knowledge", "Science", "Computer"];
  const timeNum = [1, 2, 3];
  return (
    <div className="setquiz p-4 font-poppin h-screen">
      <div className="text-center m-auto flex flex-col gap-2 justify-center items-center">
        <img src={quesIcon} alt="img" className="w-[50%] md:w-[30%]" />
        <div className="texts">
          <p className="mb-2">
            This quiz is to test your speed and accuracy. It contains a total
            number of 10 questions for each category. You can not go to the
            previous question, so you've to be accurate as much as you can. The time starts ticking immediately you start and submits automatically when you exceed it.
          </p>
          <p>
            If you did not set any category or time the default settings will be
            applied.
          </p>
          <p>Gooodluck!</p>
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
                <option key={cate} className="p-2">
                  {cate}
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
                <option key={num}>{num}</option>
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
