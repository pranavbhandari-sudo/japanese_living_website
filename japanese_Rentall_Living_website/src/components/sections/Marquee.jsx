"use client";
import styles from "./Marquee.module.css";

const items = [
  "東京 TOKYO",
  "•",
  "2,400+ 物件",
  "•",
  "渋谷 SHIBUYA",
  "•",
  "新宿 SHINJUKU",
  "•",
  "98% 満足度",
  "•",
  "港区 MINATO",
  "•",
  "15,000+ 入居者",
  "•",
  "目黒 MEGURO",
  "•",
  "最短3日入居",
  "•",
];

export default function Marquee() {
  const row = items.join("  ");

  return (
    <section className={styles.section}>
      <div className={styles.track}>
        <div className={styles.row1}>
          <span>{row}</span>
          <span>{row}</span>
        </div>
      </div>
      <div className={styles.track}>
        <div className={styles.row2}>
          <span>{row}</span>
          <span>{row}</span>
        </div>
      </div>
    </section>
  );
}
