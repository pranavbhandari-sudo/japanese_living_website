"use client";
import { motion } from "framer-motion";
import { Users, Building2, Globe2, Heart } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionLabel from "@/components/ui/SectionLabel";
import { team } from "@/data/team";
import styles from "./about.module.css";

const stats = [
  { value: "2,400+", label: "掲載物件数", icon: Building2 },
  { value: "15,000+", label: "入居者数", icon: Users },
  { value: "12", label: "対応都市数", icon: Globe2 },
  { value: "98%", label: "満足度", icon: Heart },
];

const values = [
  {
    title: "寄り添うサポート",
    desc: "言語の壁を乗り越え、お客様一人ひとりに寄り添った丁寧なサービスを提供します。",
  },
  {
    title: "透明性と信頼",
    desc: "すべての物件情報と費用を明確に提示。隠れた費用は一切ありません。",
  },
  {
    title: "多文化への理解",
    desc: "様々な文化背景を持つスタッフが、日本での生活をサポートします。",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Hero */}
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <SectionLabel number="—" label="ABOUT" />
              <h1 className={styles.heroTitle}>
                <AnimatedText text="私たちについて" />
              </h1>
              <p className={styles.heroSub}>
                日本での暮らしを、もっと身近に。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className={`section ${styles.mission}`}>
          <div className="container">
            <div className={styles.missionGrid}>
              <motion.div
                className={styles.missionLeft}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <SectionLabel number="01" label="MISSION" />
                <h2 className={styles.missionTitle}>
                  日本での暮らしを、
                  <br />
                  もっと身近に。
                </h2>
              </motion.div>
              <motion.div
                className={styles.missionRight}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className={styles.missionText}>
                  住まいは、2015年に設立された外国人・留学生向けの不動産プラットフォームです。
                  言語の壁や複雑な手続きを乗り越え、誰もが安心して日本での生活を始められるよう、
                  私たちは日々サポートを続けています。
                </p>
                <p className={styles.missionText}>
                  「住まいを見つける」ということは、単なる契約ではありません。
                  新しい文化との出会い、新しいコミュニティへの参加、そして新しい人生の始まりです。
                  私たちは、その大切な一歩を全力でサポートします。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <motion.div
              className={styles.statsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <motion.div key={i} className={styles.statCard} variants={itemVariants}>
                  <stat.icon size={24} strokeWidth={1.2} className={styles.statIcon} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className={`section ${styles.teamSection}`}>
          <div className="container">
            <SectionLabel number="02" label="TEAM" />
            <h2 className={styles.sectionTitle}>
              <AnimatedText text="チーム紹介" />
            </h2>

            <motion.div
              className={styles.teamGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team.map((member, i) => (
                <motion.div key={i} className={styles.teamCard} variants={itemVariants}>
                  <div className={styles.teamAvatar}>
                    <span className={styles.teamInitial}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className={`section ${styles.valuesSection}`}>
          <div className="container">
            <SectionLabel number="03" label="VALUES" />
            <h2 className={styles.sectionTitle}>
              <AnimatedText text="私たちの価値観" />
            </h2>

            <div className={styles.valuesGrid}>
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className={styles.valueNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
