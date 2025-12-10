import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function Option({ text, isSelected, onClick }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.995 }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      aria-pressed={isSelected ? "true" : "false"}
      className={`option-btn ${isSelected ? "option-selected" : ""}`}
    >
      <span className="option-text">{text}</span>
    </motion.button>
  );
}

