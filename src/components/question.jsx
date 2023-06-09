import { useEffect, useState } from "react";
import Button from "./button/button";

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
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
        );
        const data = await response.json();
        setQuizData(data);
        console.log(quizData);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  // function handleNext() {
  //   if (indexNum < 2) {
  //     setIndexNum(indexNum + 1);
  //     console.log(indexNum);
  //     return indexNum;
  //   } else alert("quest over bitch!");
  // }
  // function handePrev() {
  //   if (indexNum > 0) {
  //     setIndexNum(indexNum - 1);
  //     console.log(indexNum);
  //   } else alert("what else");
  // }
  function handlemark(params) {
    console.log(params);
    if (indexNum < 2) {
      setIndexNum(indexNum + 1);
      console.log(indexNum);
      return indexNum;
    } else alert("quest over bitch!");
  }
  return (
    <div className="qusestion md:w-[50%] m-auto">
      <div className="ques p-4 border-2 border-blue-950 rounded-lg text-2xl mb-3">
        {questiondb[indexNum].ques}
      </div>
      <div className="btn flex flex-col gap-2 mb-2">
        {questiondb[indexNum].opts.map((opt) => (
          <Button
            className={"bg-blue-950 p-4 rounded-lg text-white"}
            Children={opt}
            key={opt}
            handleClick={() => {
              handlemark(opt);
            }}
          />
        ))}
      </div>
      <div className="next-prev flex justify-between mt-2 pt-2">
        {indexNum <= 2 && (
          <Button
            className={"py-2 px-4 bg-blue-950 text-white mr-2 "}
            Children={"< prev"}
            // handleClick={handePrev}
          />
        )}
        {indexNum == 2 && (
          <Button
            className={"py-2 px-4 bg-blue-950 text-white mr-2 "}
            Children={"Submit"}
            // handleClick={handePrev}
          />
        )}

        <Button
          className={"py-2 px-4 bg-blue-950 text-white"}
          Children={"next >"}
          // handleClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Question;
