"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            style={{ display: "inline-block", marginRight: "0.3em" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.76, 0, 0.24, 1],
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
