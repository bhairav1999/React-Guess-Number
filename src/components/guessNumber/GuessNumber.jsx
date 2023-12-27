import { useState } from "react";

const GuessNumber = () => {
  const [inputData , setInputData]=useState()
  const [guessNumber, setGuesNumber] = useState();

  
  const RandomNumber = Math.floor(Math.random()*20 +1)
  const checkHandler =(e)=>{
    e.preventDefault()
  setGuesNumber(...inputData ,guessNumber )

console.log(`Bhairav`,RandomNumber);
console.log(guessNumber)
  if(!RandomNumber === guessNumber){
    alert("player")
  }

  }
  return (
    <>
      <section className="text-center">
        {/* <h2 className="text-4xl  mt-5 font-extrabold">
          Guess Number{" "}
        </h2> */}
        <div className="mt-12"> 💥---------- <span>{RandomNumber}</span> --------------💥 </div>

        <div className="mt-12">
          <input
          // name="inputData"
          value={inputData}
            type="number"
            className="border px-8 py-2 rounded-3xl"
            placeholder="enter value"
            onChange={(e)=>setInputData(e.target.value)}
          />

          
        </div>

        <div className="mt-5">
        <button className="bg-sky-500 hover:bg-sky-700 rounded-2xl px-3 py-2 text-white font-medium" onClick={checkHandler}>
            Save changes
          </button>
        </div>
      </section>
    </>
  );
};

export default GuessNumber;
