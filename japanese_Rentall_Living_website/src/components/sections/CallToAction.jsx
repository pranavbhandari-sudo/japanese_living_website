"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <div className={styles.labelRow}>
            <span className={styles.goldDot} />
            <span className={styles.labelText}>始めましょう</span>
          </div>

          <h2 className={styles.headline}>
            あなたの東京生活、
            <br />
            <span className={styles.accent}>ここから始まる。</span>
          </h2>

          <p className={styles.desc}>
            2,400件以上の物件から、あなたにぴったりのお部屋を見つけましょう。
            多言語サポートで安心の入居体験をお届けします。
          </p>

          <div className={styles.buttons}>
            <MagneticButton className="btn btn-primary">
              物件を探す <ArrowRight size={14} />
            </MagneticButton>
            <MagneticButton className="btn btn-ghost">
              お問い合わせ
            </MagneticButton>
          </div>

          {/* Decorative Elements */}
          <div className={styles.decoCircle1} />
          <div className={styles.decoCircle2} />
          <div className={styles.decoLine} />
        </motion.div>
      </div>
    </section>
  );
}
