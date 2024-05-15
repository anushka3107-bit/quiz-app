import React from "react";
import { useState } from "react";
import { data } from "../data";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const question = data[index];

  const checkAnswer = (selectedOption) => {
    if (selectedOption === null) {
      alert("Please select an option");
      return;
    }
    setSelectedOption(selectedOption);
    if (selectedOption === question.answer) {
      // alert('correct answer');
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      // alert("wrong answer");
    }
  };

  const nextQuestion = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const prevQuestion = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setIndex(0);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  return (
    <div className="m-6 flex flex-col">
      <div className="bg-[#BEEBE9] relative px-36 py-20 rounded-3xl border-r-4 border-[#9BE3DE] border-b-4 ">
        <h2 className="text-xl text-black font-bold">
          {index + 1}.{question?.ques}
        </h2>

        <BsStars className="absolute text-3xl text-white right-4 top-7" />
        <WiStars className="absolute text-4xl text-white bottom-6 right-3" />
      </div>

      <div className="mt-2 flex flex-col">
        {question?.options.map((option, idx) => {
          return (
            <button
              key={idx}
              className={`
              ${isCorrect === true && idx+1 === question.answer  ? "bg-green-500" : ""}
              ${isCorrect === false && idx + 1 === selectedOption ? "bg-red-500" : ""}
              bg-white my-3 px-2 py-2 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl`}
              onClick={() => checkAnswer(idx + 1)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {/* <button onClick={checkAnswer}>Check Answer</button>  */}
      <div className="flex justify-between text-center font-semibold">
        <button
          className="px-4 py-3 bg-[#9BE3DE] rounded-full text-black"
          onClick={prevQuestion}
        >
          Prev Question
        </button>

        <button
          className="px-4 py-3 bg-[#9BE3DE] rounded-full text-black"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Questions;
