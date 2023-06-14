import resultImage from "../assets/undraw_result_re_uj08.svg";

const Result = ({ user }) => {
  return (
    <div className="result p-4 text-white font-medium mt-4 flex flex-row-reverse justify-between">
      <img src={resultImage} alt="img" className="w-[50%] md:w-[20%]" />
      <div className="text text-blue-950">
        <h1 className="text-2xl font-bold">Result</h1>
        <p className="p-4">Name here : {user}</p>
        <p className="p-4">Score</p>
        <p className="p-4">Comment</p>
      </div>
    </div>
  );
};

export default Result;
