"use client";
import { motion } from "framer-motion";
import { Home, Globe, FileText, Key } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import styles from "./Features.module.css";

const features = [
  {
    icon: Home,
    title: "豊富な物件数",
    desc: "2,400件以上の厳選物件からお選びいただけます。東京都内を中心に、全国12都市に対応。",
    stat: "2,400+",
    statLabel: "掲載物件",
  },
  {
    icon: Globe,
    title: "多言語サポート",
    desc: "日本語・英語・中国語・韓国語に対応。母国語での相談が可能です。",
    stat: "4",
    statLabel: "対応言語",
  },
  {
    icon: FileText,
    title: "手続きが簡単",
    desc: "書類作成から契約まで完全サポート。面倒な手続きはすべてお任せください。",
    stat: "100%",
    statLabel: "サポート",
  },
  {
    icon: Key,
    title: "即入居可能",
    desc: "最短3日で入居可能な物件多数。急なお引越しにも対応いたします。",
    stat: "3日",
    statLabel: "最短入居",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Features() {
  return (
    <section className={`section ${styles.section}`} id="features">
      <div className="container">
        <SectionLabel number="02" label="FEATURES" />

        <div className={styles.header}>
          <h2 className={styles.title}>
            <AnimatedText text="なぜ住まいを選ぶのか" />
          </h2>
          <p className={styles.subtitle}>
            私たちは外国人・留学生の日本での住まい探しを、もっとシンプルに、もっと安心にします。
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <feat.icon size={24} strokeWidth={1.2} />
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>{feat.stat}</span>
                <span className={styles.statLabel}>{feat.statLabel}</span>
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
