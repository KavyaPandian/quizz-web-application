import React from "react";
import Navbar from "../shared/Navbar";
import ProgressBar from "../shared/ProgressBar";
import QuestionCard from "../shared/QuestionCard";
import NavButtons from "../shared/NavButtons";

type Props = {
  questions: any[];
  current: number;
  answers: number[];
  onSelect: (qIndex:number, optionIndex:number) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
};

export default function HomeQuiz({ questions, current, answers, onSelect, onNext, onPrev, onSubmit }: Props) {
  return (
    <div className="min-h-screen bg-bg font-inter">
      <Navbar />
      <main className="container-center px-6 py-12">
        <div className="outer-frame">
          <header className="text-center">
            <h1 className="title-serif title-serif-lg">Test Your Knowledge</h1>
            <p className="title-chip mt-4">Answer all questions to see your results</p>
          </header>

          <section className="mt-8">
            <ProgressBar length={questions.length} index={current} />
          </section>

          <section className="mt-8">
            <QuestionCard
              q={questions[current]}
              qIndex={current}
              selected={answers[current]}
              onSelect={onSelect}
            />
          </section>

          <div className="mt-8 flex justify-between items-center">
            <div />
            <NavButtons
              onPrev={onPrev}
              onNext={onNext}
              onSubmit={onSubmit}
              isLast={current === questions.length - 1}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

