"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "サービス",
    links: [
      { label: "物件を探す", href: "/#listings" },
      { label: "エリアから探す", href: "/#city-guide" },
      { label: "間取りから探す", href: "/#listings" },
      { label: "家賃相場を調べる", href: "/#listings" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "よくある質問", href: "/contact#faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "入居ガイド", href: "/#how-it-works" },
      { label: "多言語サポート", href: "/about" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { label: "私たちについて", href: "/about" },
      { label: "採用情報", href: "/about" },
      { label: "プレスリリース", href: "/about" },
      { label: "パートナー", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.logo}>
              <span className={styles.logoJp}>住まい</span>
              <span className={styles.logoEn}>SUMAI</span>
            </div>
            <p className={styles.tagline}>
              日本での、理想の暮らしを。
            </p>
            <p className={styles.taglineEn}>
              Making Japan home, one apartment at a time.
            </p>
          </motion.div>

          <div className={styles.columns}>
            {footerColumns.map((col, i) => (
              <motion.div
                key={col.title}
                className={styles.column}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                        <ArrowUpRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 住まい株式会社 All Rights Reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/terms" className={styles.legalLink}>利用規約</Link>
            <Link href="/privacy" className={styles.legalLink}>プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
