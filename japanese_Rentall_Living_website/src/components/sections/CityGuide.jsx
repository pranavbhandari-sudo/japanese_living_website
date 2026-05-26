"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Train } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { neighborhoods } from "@/data/neighborhoods";
import styles from "./CityGuide.module.css";

export default function CityGuide() {
  const [active, setActive] = useState(neighborhoods[0].id);
  const activeHood = neighborhoods.find((n) => n.id === active);

  return (
    <section className={`section ${styles.section}`} id="city-guide">
      <div className="container">
        <SectionLabel number="05" label="CITY GUIDE" />

        <div className={styles.header}>
          <h2 className={styles.title}>
            <AnimatedText text="エリアガイド" />
          </h2>
          <p className={styles.subtitle}>
            東京の人気エリアの特徴と家賃相場をチェックしましょう。
          </p>
        </div>

        <div className={styles.layout}>
          {/* Tab Selector */}
          <div className={styles.tabs}>
            {neighborhoods.map((hood) => (
              <button
                key={hood.id}
                className={`${styles.tab} ${
                  active === hood.id ? styles.tabActive : ""
                }`}
                onClick={() => setActive(hood.id)}
              >
                <span className={styles.tabName}>{hood.name}</span>
                <span className={styles.tabEn}>{hood.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.detail}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className={styles.detailHeader}>
                <h3 className={styles.detailName}>{activeHood.name}</h3>
                <span className={styles.vibe}>{activeHood.vibe}</span>
              </div>

              <p className={styles.detailDesc}>{activeHood.description}</p>

              <div className={styles.highlight}>
                <MapPin size={14} />
                <span>{activeHood.highlight}</span>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>平均家賃</span>
                  <span className={styles.metaValue}>{activeHood.avgRent}</span>
                </div>
                <div className={styles.stations}>
                  <span className={styles.metaLabel}>主要駅</span>
                  <div className={styles.stationList}>
                    {activeHood.stations.map((s) => (
                      <span key={s} className={styles.station}>
                        <Train size={12} /> {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="btn btn-outline" style={{ marginTop: "var(--space-8)" }}>
                {activeHood.name}の物件を見る →
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
