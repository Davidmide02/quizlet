import Button from "./button/button";
import person from "../assets/undraw_quiz_re_aol4.svg";
import Setquiz from "../setquiz";
import { Link } from "react-router-dom";

const Home = ({ setUser, user }) => {
  function handleSubmit() {

    if (!user) {
      alert("enter your name");
    }
  }
  return (
    <div className="home bg-blue-950 pt-2 text-white mt-2">
      <div className="text-img w-[80%] m-auto gap-2 flex flex-col-reverse items-center md:flex-row-reverse md:justify-between mt-4 text-2xl">
        <img src={person} alt="person" className="w-[50%] md:w-[20%]" />
        <div className="text md:text-left md:w-[50%]">
          <p className="mt-2">
            Welcome to the platform that equip you, prepare and lunch you for
            greatness!
          </p>
          <p className="mt-2">
            "Whatever you vividly imagine, ardently desire, sincerely believe
            and enthusiastically act upon, must inevitably come to pass! - Skip
            Bertman"
          </p>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 mt-2 items-center justify-center p-4"
      >
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            e.preventDefault();
            setUser(e.target.value);
          }}
          placeholder="Enter name..."
          className="bg-white w-[70%] md:w-[40%] rounded-lg py-2 px-4 outline-none text-blue-950"
        />
        <Link to={!user ? "/" : "/setquiz"}>
          <Button
            type={"submit"}
            Children={"Get Started"}
            className={
              " text-lg font-bold border-2 border-white rounded-lg px-2 hover:bg-white hover:text-blue-950"
            }
            handleClick={() => handleSubmit()}
          />
        </Link>
      </form>

      <Setquiz />
    </div>
  );
};

export default Home;
