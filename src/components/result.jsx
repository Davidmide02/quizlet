import { useState } from "react";
import resultImage from "../assets/undraw_result_re_uj08.svg";
import Button from "./button/button";
import { Link } from "react-router-dom";

const Result = ({ user, score, setScore }) => {
  const [commentdb, setCommentdb] = useState(null);
  const commentGood = ["Splendid!", "You Sabi book!", "Scholar!"];
  const commentBad = [
    "You no sabi book!",
    "Guyy, you be olodo!",
    "Book you no know sabi!",
  ];
  const commentAverage = ["You try!", "Average!", "pass!"];

  const handleComment = (param) => {
    if (param >= 7) {
      setCommentdb(commentGood[Math.floor(Math.random() * 3)]);
    } else if (param >= 5) {
      setCommentdb(commentAverage[Math.floor(Math.random() * 3)]);
    } else {
      setCommentdb(commentBad[Math.floor(Math.random() * 3)]);
    }
  };
  // handleComment(score);

  return (
    <div className="result p-4 text-white font-medium mt-4 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between">
      <img src={resultImage} alt="img" className="w-[50%] md:w-[20%]" />
      <div className="text text-blue-950">
        <h1 className="text-2xl font-bold">Result</h1>
        <p className="p-4 font-bold">Name: {user}</p>
        <p className="p-4 font-bold">Score: {score}</p>
        <p className="p-4 font-bold">Comment:{commentdb} </p>
      </div>
      <div>
        <Link to={"/setquiz"}>
          <Button
            type={"submit"}
            Children={"Retry"}
            className={
              "text-base font-bold border-2 bg-blue-950 border-white rounded-lg p-2 hover:bg-white hover:border-blue-950 hover:text-blue-950"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Result;
