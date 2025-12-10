import React, { useState } from "react";
import HomeQuiz from "./pages/HomeQuiz";
import ResultPage from "./pages/ResultPage";
import questionsData from "./data/questions";

export default function App() {
  const questions = questionsData;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isFinished, setIsFinished] = useState(false);

  function handleSelect(qIndex:number, optionIndex:number){
    setAnswers(prev => {
      const copy = [...prev];
      copy[qIndex] = optionIndex;
      return copy;
    });
  }

  function handleNext(){
    setCurrent(c => Math.min(c+1, questions.length-1));
  }
  function handlePrev(){
    setCurrent(c => Math.max(0, c-1));
  }
  function handleSubmit(){
    setIsFinished(true);
  }
  function handleRestart(){
    setAnswers(Array(questions.length).fill(-1));
    setCurrent(0);
    setIsFinished(false);
  }

  if(isFinished){
    // compute score simple: count correct
    const score = questions.reduce((acc,q,i) => acc + (answers[i]===q.answer?1:0), 0);
    const percent = Math.round((score / questions.length) * 100);
    return <ResultPage score={percent} onRestart={handleRestart} />;
  }

  return (
    <HomeQuiz
      questions={questions}
      current={current}
      answers={answers}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
      onSubmit={handleSubmit}
    />
  );
}
