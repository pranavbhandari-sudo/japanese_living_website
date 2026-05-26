"use client";
import { motion } from "framer-motion";
import { Search, Eye, CheckCircle, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "物件を選ぶ",
    desc: "条件を入力してお気に入りを見つけよう。エリア、間取り、家賃から簡単検索。",
    accent: "var(--color-matcha)",
  },
  {
    icon: Eye,
    number: "02",
    title: "内見を申し込む",
    desc: "オンライン・現地どちらでも対応。お気軽にお申し込みください。",
    accent: "var(--color-gold)",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "契約・入居",
    desc: "最短3日で新生活スタート。書類準備から契約まで完全サポート。",
    accent: "var(--color-sakura)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        <SectionLabel number="04" label="PROCESS" />

        <div className={styles.header}>
          <h2 className={styles.title}>
            <AnimatedText text="入居までの流れ" />
          </h2>
          <p className={styles.subtitle}>
            シンプルな3ステップで、あなたの新しい暮らしが始まります。
          </p>
        </div>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} className={styles.step} variants={itemVariants}>
              <div
                className={styles.stepIcon}
                style={{ background: `${step.accent}15`, color: step.accent }}
              >
                <step.icon size={28} strokeWidth={1.2} />
              </div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className={styles.connector}>
                  <ArrowRight size={18} className={styles.connectorIcon} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
