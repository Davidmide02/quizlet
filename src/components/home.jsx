import Button from "./button/button";

const Home = ({setUser}) => {

  function handleSubmit(params) {
    params.preventDefault();
  
    
  }
  return (
    <div className="home">
      <div className="text w-[80%] md:w-[40%] m-auto gap-2 mt-4 text-2xl">
        <p className="mt-2">
          Welcome to the platform that equip you, prepare and lunch you for
          greatness!
        </p>
        <p className="mt-2">
          "Whatever you vividly imagine, ardently desire, sincerely believe and
          enthusiastically act upon, must inevitably come to pass! - Skip
          Bertman"
        </p>
      </div>
      <form action="" className="flex flex-col gap-4 mt-2 items-center justify-center p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            e.preventDefault();
            setUser(e.target.value)
          }}
          placeholder="Enter name..."
          className="bg-blue-950 w-[70%] md:w-[40%] rounded-lg py-2 px-4 outline-none text-white"
        />
        <Button type={'submit'}Children={'Get Started'} className={' text-lg font-bold border-2 border-blue-950 rounded-lg px-2 hover:bg-blue-950 hover:text-white'}/>
      </form>
    </div>
  );
};

export default Home;
