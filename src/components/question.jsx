import { useEffect, useState } from "react";
import Button from "./button";

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

const Question = () => {
  // useEffect(
  //   fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  //   .then( res => {
  //     res.JSON()}

  //   )
  //   .then(console.log())
  // )
  const [indexNum, setParn] = useState(0);
  // let indexNum = 0;
  function handleNext() {
    // indexNum= indexNum+1
    if (indexNum < 2) {
      setParn(indexNum + 1);
      console.log(indexNum);
      return indexNum;
    } else alert("quest over bitch!");
  }
  function handePrev() {
    if (indexNum > 0) {
      setParn(indexNum - 1);
      console.log(indexNum);
    } else alert("what else");
  }
  return (
    <div className="qusestion md:w-[50%] m-auto">
      <div className="ques p-4 bg-red-500 mb-3">
        {questiondb[indexNum].ques}
      </div>
      <div className="btn flex flex-col gap-2">
        {questiondb[indexNum].opts.map((opt) => (
          <Button
            className={"bg-green-700 p-4 rounded-lg text-white"}
            Children={opt}
            key={opt}
          />
        ))}

        {/* <Button
          className={"bg-green-700 p-4 rounded-lg"}
          Children={"Option 2"}
        />
        <Button
          className={"bg-green-700 p-4 rounded-lg"}
          Children={"Option 3"}
        />
        <Button
          className={"bg-green-700 p-4 rounded-lg mb-2"}
          Children={"Option 4"}
        /> */}
      </div>
      {indexNum <= 2 && (
        <Button
          className={"py-2 px-4 bg-blue-950 text-white mr-2 "}
          Children={"prev"}
          handleClick={handePrev}
        />
      )}
      {indexNum == 2 && (
        <Button
          className={"py-2 px-4 bg-blue-950 text-white mr-2 "}
          Children={"Submit"}
          handleClick={handePrev}
        />
      )}

      <Button
        className={"py-2 px-4 bg-blue-950 text-white"}
        Children={"next"}
        handleClick={handleNext}
      />
    </div>
  );
};

export default Question;
