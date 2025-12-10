import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ length=4, index=0 }: { length?:number, index?:number }) {
  const percent = Math.round((index / Math.max(1, length - 1)) * 100);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="progress-track">
        <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} className="progress-fill" transition={{ duration: 0.6 }} />
      </div>
      <div className="progress-steps">
        {Array.from({ length }).map((_, i) => (
          <div key={i} className={`progress-step ${i <= index ? "bg-primary" : ""}`} />
        ))}
      </div>
    </div>
  );
}
