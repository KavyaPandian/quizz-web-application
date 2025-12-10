import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ResultPage({ score = 62, onRestart }: any) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 900;
    const start = Date.now();
    const raf = () => {
      const now = Date.now();
      const p = Math.min(1, (now - start) / dur);
      setVal(Math.round(score * p));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {};
  }, [score]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center p-8">
        <div className="mb-6">
          <button className="title-chip">Keep Learning!</button>
        </div>

        <h2 className="title-serif text-4xl text-primary mb-6">Your Final score is</h2>

        <div className="result-number text-[6.5rem] mb-8">
          {val}<span className="percent">% </span>
        </div>

        <div>
          <button className="btn-primary" onClick={onRestart}>Start Again</button>
        </div>
      </motion.div>
    </div>
  );
}

