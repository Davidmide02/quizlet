import Button from "./button";

const Question = () => {
  return (
    <div className="qusestion md:w-[50%] m-auto">
      <div className="ques p-4 bg-red-500 mb-3">question here</div>
      <div className="btn flex flex-col gap-2">
        <Button className={'bg-green-700 p-4 rounded-lg'} Children={'Option 1'} />
        <Button className={'bg-green-700 p-4 rounded-lg'} Children={'Option 2'} />
        <Button className={'bg-green-700 p-4 rounded-lg'} Children={'Option 3'} />
        <Button className={'bg-green-700 p-4 rounded-lg mb-2'} Children={'Option 4'} />
    
      </div>
    </div>
  );
};

export default Question;
