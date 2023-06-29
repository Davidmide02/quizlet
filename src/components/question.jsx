import { useEffect, useState } from "react";
import Button from "./button/button";
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple  general knowledge
// https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple anime
// https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple computer
// https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple science

const questiondb = [
  {
    ques: "what is you 1",
    id: 1,
    opts: ["A Hello", "B Okay", "C alright", "D Lastly"],
    ans: "B",
  },
  {
    ques: "what is you 2",
    id: 2,
    opts: ["A Hello", "B Okay", "C alright", "D Lastly"],
    ans: "B",
  },
  {
    ques: "what is you 3",
    id: 3,
    opts: ["A Hello", "B Okay", "C alright", "D Lastly"],
    ans: "B",
  },
];
// "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
const Question = () => {
  const [indexNum, setIndexNum] = useState(0);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://the-trivia-api.com/v2/questions");
    const data = await response.json();
    setQuizData(data);
    console.log(data.length);
  };

  function handlemark(params) {
    console.log(params);
    if (indexNum < quizData.length) {
      setIndexNum(indexNum + 1);
      console.log(indexNum);
      return indexNum;
    } else alert("quest over bitch!");
  }
  if (quizData !== null) {
    return (
      <>
        <div className="qusestion md:w-[50%] m-auto pt-4">
          <div className="ques p-4 border-2 border-blue-950 rounded-lg text-2xl mb-3">
            {/* {quizData.results[indexNum].question} */}
            {quizData[indexNum].question.text}
          </div>
          <div className="btn flex flex-col gap-2 mb-2">
            {/* {quizData.results[indexNum].incorrect_answers.map((opt) => (
              <Button
                className={"bg-blue-950 p-4 rounded-lg text-white"}
                Children={opt}
                key={opt}
                handleClick={() => {
                  handlemark(opt);
                }}
              />
            ))} */}
            {quizData[indexNum].incorrectAnswers.map((opt) => (
              <Button
                className={"bg-blue-950 p-4 rounded-lg text-white"}
                Children={opt}
                key={opt}
                handleClick={() => {
                  handlemark(opt);
                }}
              />
            ))}

            <Button
              className={"bg-blue-950 p-4 rounded-lg text-white"}
              Children={quizData[indexNum].correctAnswer}
              key={quizData[indexNum].correctAnswer}
              handleClick={() => {
                handlemark(quizData[indexNum].correctAnswer);
              }}
            />

            {/* <Button
              className={"bg-blue-950 p-4 rounded-lg text-white"}
              Children={quizData.results[indexNum].correct_answer}
              key={quizData.results[indexNum].correct_answer}
              handleClick={() => {
                handlemark(quizData.results[indexNum].correct_answer);
              }}
            /> */}
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
