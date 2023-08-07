import { useEffect } from "react";

const useFetch = () => {
  const [questions, setQuestions] = useState(null);

//   helper function to fetch question from api
  const fetchData = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    );
    const data = await response.json();
    setQuestions(data.results);
    console.log(data);
    console.log(questions.length);
    
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return questions;
};

export default useFetch;
