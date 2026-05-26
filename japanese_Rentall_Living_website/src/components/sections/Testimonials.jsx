"use client";
import { Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { testimonials } from "@/data/team";
import styles from "./Testimonials.module.css";

function TestimonialCard({ t }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.stars}>
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} size={12} fill="var(--color-gold)" stroke="none" />
          ))}
        </div>
        <span className={styles.type}>{t.type}</span>
      </div>
      <p className={styles.quote}>「{t.quote}」</p>
      <div className={styles.author}>
        <span className={styles.flag}>{t.nationality}</span>
        <span className={styles.name}>{t.name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <SectionLabel number="06" label="TESTIMONIALS" />
        <div className={styles.header}>
          <h2 className={styles.title}>
            <AnimatedText text="入居者の声" />
          </h2>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeRow1}>
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeRow2}>
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
