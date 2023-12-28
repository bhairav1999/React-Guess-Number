import { useState, useEffect } from "react";

const GuessNumber = () => {
  const [inputData, setInputData] = useState("");
  const [guessNumber, setGuessNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState();
  const [message, setMessage] = useState("PROCESSING......");
  const [score, setScore] = useState(20);

  const randomNumberset = () => {
    setRandomNumber(Math.floor(Math.random() * 20 + 1));
  };
  useEffect(() => {
    randomNumberset();
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(parseInt(storedScore));
    }
  }, []);

  const checkHandler = (e) => {
    e.preventDefault();
    setGuessNumber(inputData);
    if (inputData === "") {
      setMessage("Please Enter a number");
    }
    setInputData("");
  };

  useEffect(() => {
    if (randomNumber === parseInt(guessNumber)) {
      setMessage("Congratulations! You guessed the correct number!");
      setScore(score + 1);
      localStorage.setItem("score", score + 1);
    }

    if (randomNumber < parseInt(guessNumber)) {
      setMessage("TOO HIGH NUMBER");
      setScore(score - 1);
      localStorage.setItem("score", score - 1);
    }

    if (randomNumber > parseInt(guessNumber)) {
      setMessage("TOO LOW NUMBER");
      setScore(score - 1);
      localStorage.setItem("score", score - 1);
    }
  }, [guessNumber]);

  return (
    <>
      <section className="text-center bg-amber-300">
        <div className="pt-12">
          💥----------{" "}
          <span className="text-4xl font-extrabold">{randomNumber}</span>{" "}
          --------------💥
        </div>
        <h1 className="text-red-700 mt-5">{message}</h1>
        <h2 className="text-green-700 mt-5 font-extrabold text-2xl">
          Score :- {score}
        </h2>
        <div className="mt-12">
          <input
            value={inputData}
            type="number"
            className="border px-8 py-2 rounded-3xl"
            placeholder="enter value"
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>

        <div className="mt-5 pb-3">
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-2xl px-3 py-2 text-white font-medium"
            onClick={checkHandler}
          >
            Save changes
          </button>
        </div>
      </section>

      <hr />

      <ul className=" text-black  p-5">
        {" "}
        Note :-
        <li> ▶ Enter a number in the input field.</li>
        <li>▶ Click Save changes to submit your guess.</li>
        <li>
          ▶ Receive feedback on whether your guess is correct, too high, or too
          low.
        </li>
        <li> ▶Repeat the process to improve your score.</li>
        Enjoy playing the number guessing game!
      </ul>
    </>
  );
};

export default GuessNumber;
