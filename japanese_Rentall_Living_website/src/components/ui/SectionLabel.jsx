"use client";
import { motion } from "framer-motion";
import styles from "./SectionLabel.module.css";

export default function SectionLabel({ number, label }) {
  return (
    <motion.div
      className={styles.label}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true }}
    >
      <span className={styles.number}>{number}</span>
      <span className={styles.dividerLine} />
      <span className={styles.text}>{label}</span>
    </motion.div>
  );
}
