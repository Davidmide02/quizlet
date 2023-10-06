import { useEffect, useState } from "react";
import Button from "./button/button";
import { useNavigate } from "react-router-dom";
import NotFound from "../notFound";

const Question = ({
  questionCategory,
  setScore,
  score,
  timeLeft,
  setTimeLeft,
}) => {
  const [indexNum, setIndexNum] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  //autosubmit func when time exceeds
  const autoSubmit = (time) => {
    setTimeout(() => {
      navigate("/result");
    }, time * 1000);
  };
  // couunting submission time func
  const countSubmissionTime = (startime) => {
    let countdownInterval;
    if (startime > 0) {
      countdownInterval = setInterval(() => {
        setTimeLeft(startime - 1);
      }, 1000);
      return () => {
        clearInterval(countdownInterval);
      };
    }

    return () => {};
  };

  useEffect(() => {
    // countSubmissinTime(timeLeft);
    countSubmissionTime(timeLeft);
    autoSubmit(timeLeft);
  }, [timeLeft]);

  //   helper function to fetch question from api
  const fetchData = async () => {
    try {
      const response = await fetch(questionCategory);
      if (!response.status == 200) {
        throw new Error("Can not fetch data");
      }
      const data = await response.json();
      // console.log(data);
      setQuestions(data.results);
    } catch (err) {
      setErrMessage(err);
      //   console.log(errMessage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleNext(params) {
    if (indexNum <= questions.length - 1) {
      // nested check
      if (indexNum == questions.length - 1) {
        navigate("/result");
        return indexNum;
      }
      setIndexNum(indexNum + 1);
      return indexNum;
    } else {
      navigate("/result");
    }
  }

  // trigger at every click of correct option
  function markCorrect() {
    setScore(score + 1);
  }

  if (questions !== null) {
    return (
      <>
        <div>
          <p> Time Left:{timeLeft}</p>
          <p>Left: {indexNum == 0 ? 1 : indexNum + 1}/10</p>
        </div>
        <div className="qusestion md:w-[50%] m-auto pt-4">
          <div className="ques p-4 border-2 border-blue-950 rounded-lg text-2xl mb-3">
            <span>{indexNum == 0 ? 1 : indexNum + 1}.</span>{" "}
            {questions[indexNum].question}
          </div>
          <div className="btn flex flex-col gap-2 mb-2">
            {questions[indexNum].incorrect_answers.map((opt) => (
              <Button
                className={"bg-blue-950 p-4 rounded-lg text-white"}
                Children={opt}
                key={opt}
                handleClick={() => {
                  handleNext(opt);
                }}
              />
            ))}

            <Button
              className={"bg-blue-950 p-4 rounded-lg text-white"}
              Children={questions[indexNum].correct_answer}
              key={questions[indexNum].correct_answer}
              handleClick={() => {
                handleNext(questions[indexNum].correct_answer);
                markCorrect();
              }}
            />
          </div>
        </div>
        ;
      </>
    );
  } else {
    return <h1 className="text-lg font-bold">Fetching questions....</h1>;
  }
};

export default Question;
