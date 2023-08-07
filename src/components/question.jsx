import { useEffect, useState } from "react";
import Button from "./button/button";

const Question = ({ questionCategory }) => {
  const [indexNum, setIndexNum] = useState(0);
  const [questions, setQuestions] = useState(null);

  //   helper function to fetch question from api
  const fetchData = async () => {
    const response = await fetch(questionCategory);
    const data = await response.json();
    console.log(data);
    setQuestions(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handlemark(params) {
    console.log(params);
    if (indexNum < questions.length) {
      setIndexNum(indexNum + 1);
      console.log(indexNum);
      return indexNum;
    } else alert("quest over bitch!");
  }
  if (questions !== null) {
    return (
      <>
        <div className="qusestion md:w-[50%] m-auto pt-4">
          <div className="ques p-4 border-2 border-blue-950 rounded-lg text-2xl mb-3">
            {questions[indexNum].question}
          </div>
          <div className="btn flex flex-col gap-2 mb-2">
            {questions[indexNum].incorrect_answers.map((opt) => (
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
              Children={questions[indexNum].correct_answer}
              key={questions[indexNum].correct_answer}
              handleClick={() => {
                handlemark(questions[indexNum].correct_answer);
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
