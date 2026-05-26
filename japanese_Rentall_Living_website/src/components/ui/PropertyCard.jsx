"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({ listing, index = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = ((y - centerY) / centerY) * -6;
    const ry = ((x - centerX) / centerX) * 6;
    cardRef.current.style.setProperty("--rx", `${rx}deg`);
    cardRef.current.style.setProperty("--ry", `${ry}deg`);
  };

  const handleMouseLeave = () => {
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {listing.available && (
          <span className={styles.badge}>入居可能</span>
        )}
        <div className={styles.ratingBadge}>
          <Star size={12} fill="var(--color-gold)" stroke="none" />
          <span>{listing.rating}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={styles.tag}>{listing.area}</span>
          <span className={styles.tag}>{listing.type}</span>
          <span className={styles.tag}>{listing.size}</span>
        </div>
        <h3 className={styles.title}>{listing.title}</h3>
        <div className={styles.features}>
          {listing.features.map((f, i) => (
            <span key={i} className={styles.feature}>{f}</span>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceValue}>{listing.price}</span>
            <span className={styles.priceSuffix}>{listing.priceSuffix}</span>
          </div>
          <button className={styles.cta}>
            詳細を見る <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
