import Button from "./components/button/button";

const Setquiz = () => {
  const category = ["Anime", "General knowledge", "Science", "Computer"];
  const timeNum = [1, 2, 3];
  return (
    <div className="setquiz">
      <p>This quiz to test your speed and accuracy</p>
      <p>
        If you did not set any category or time the default settings will be
        applied
      </p>
      <p>Gooodluck!</p>

      <div className="sele flex justify-between gap-4">
        <div>
          <p>Categories</p>
          <select
            name=""
            id=""
            className="text-white bg-blue-950 outline-none p-2"
            placeholder="category"
          >
            {category.map((cate) => (
              <option key={cate}>{cate}</option>
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
            ))}{" "}
            min
          </select>
        </div>
      </div>

      <Button
        Children={"Start quiz"}
        className={"px-3 py-1 border-2 border-blue-950"}
      />
    </div>
  );
};

export default Setquiz;
