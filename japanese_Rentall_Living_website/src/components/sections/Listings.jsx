"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import PropertyCard from "@/components/ui/PropertyCard";
import { listings } from "@/data/listings";
import styles from "./Listings.module.css";

export default function Listings() {
  return (
    <section className={`section ${styles.section}`} id="listings">
      <div className="container">
        <SectionLabel number="03" label="LISTINGS" />

        <div className={styles.header}>
          <h2 className={styles.title}>
            <AnimatedText text="人気エリアの物件" />
          </h2>
          <p className={styles.subtitle}>
            東京都内の厳選物件をご覧ください。すべて外国人入居可能です。
          </p>
        </div>

        <div className={styles.grid}>
          {listings.map((listing, i) => (
            <PropertyCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>

        <div className={styles.more}>
          <button className="btn btn-outline">
            すべての物件を見る →
          </button>
        </div>
      </div>
    </section>
  );
}
