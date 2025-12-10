import React from "react";
import Option from "./Option";
import { motion } from "framer-motion";

export default function QuestionCard({ q, qIndex, selected, onSelect }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <div className="bg-white/80 p-6 rounded-2xl shadow-card max-w-3xl mx-auto">
        <div className="rounded-lg bg-accent/20 p-6 border border-accent-2">
          <h3 className="text-center text-primary font-semibold text-xl">{qIndex + 1}. {q.q}</h3>
        </div>

        <div className="mt-6 space-y-4">
          {q.options.map((op:string, i:number) => (
            <Option key={i} text={op} isSelected={selected === i} onClick={() => onSelect(qIndex, i)} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
