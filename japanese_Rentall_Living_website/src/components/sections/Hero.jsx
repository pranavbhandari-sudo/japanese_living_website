"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, Home } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./Hero.module.css";

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Left Panel */}
      <motion.div
        className={styles.left}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.leftContent}>
          <motion.div
            className={styles.labelRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className={styles.goldDot} />
            <span className={styles.labelText}>東京の住まい探し</span>
          </motion.div>

          <div className={styles.headline}>
            {["住む。", "発見する。", "東京で。"].map((word, i) => (
              <motion.div
                key={i}
                className={styles.headlineWord}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {word}
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            外国人・留学生のための、理想のお部屋探し
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <MagneticButton className="btn btn-primary">
              物件を探す <ArrowRight size={14} />
            </MagneticButton>
            <MagneticButton className="btn btn-ghost">
              詳細を見る
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className={styles.scrollLine} />
            <span className={styles.scrollText}>Scroll to explore</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className={styles.right}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.imageContainer}>
          <div ref={imageRef} className={styles.imageParallax}>
            <Image
              src="/images/hero/apartment-1.png"
              alt="東京のモダンアパートメント"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* Floating Stats Card */}
        <motion.div
          className={styles.floatingCard}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className={styles.cardRow}>
            <Star size={16} fill="var(--color-gold)" stroke="none" />
            <span className={styles.cardRating}>4.9</span>
            <span className={styles.cardLabel}>/ 評価</span>
          </div>
          <div className={styles.cardDivider} />
          <div className={styles.cardRow}>
            <Home size={16} strokeWidth={1.5} />
            <span className={styles.cardStat}>2,400+</span>
            <span className={styles.cardLabel}>物件</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
