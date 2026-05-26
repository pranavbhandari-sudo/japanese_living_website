"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./contact.module.css";

const faqs = [
  {
    q: "外国人でも賃貸契約できますか？",
    a: "はい、在留カードをお持ちの方であればご契約いただけます。ビザの種類に関わらず、幅広く対応しています。",
  },
  {
    q: "保証人がいなくても入居できますか？",
    a: "保証会社のご利用で、保証人なしでも入居可能です。保証会社の審査は弊社がサポートいたします。",
  },
  {
    q: "初期費用はどのくらいかかりますか？",
    a: "一般的に家賃の2〜4ヶ月分が目安です。敷金・礼金なし物件もあります。詳しくはお問い合わせください。",
  },
  {
    q: "オンラインでの内見は可能ですか？",
    a: "はい、ZoomやLINEを使ったオンライン内見に対応しています。海外からでもお部屋を確認いただけます。",
  },
  {
    q: "入居までどのくらいの期間がかかりますか？",
    a: "最短3日で入居可能な物件もあります。通常は1〜2週間程度で入居手続きが完了します。",
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={styles.faqItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>
        <ChevronDown
          size={18}
          className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel number="—" label="CONTACT" />
              <h1 className={styles.heroTitle}>
                <AnimatedText text="お問い合わせ" />
              </h1>
              <p className={styles.heroSub}>
                ご質問やご相談がございましたら、お気軽にお問い合わせください。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Form */}
              <motion.form
                className={styles.form}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">お名前（必須）</label>
                  <input
                    className="form-input"
                    type="text"
                    id="contact-name"
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">メールアドレス（必須）</label>
                  <input
                    className="form-input"
                    type="email"
                    id="contact-email"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">電話番号</label>
                  <input
                    className="form-input"
                    type="tel"
                    id="contact-phone"
                    placeholder="090-1234-5678"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">お問い合わせ内容</label>
                  <textarea
                    className="form-input"
                    id="contact-message"
                    placeholder="物件についてのご質問、入居に関するご相談など"
                    rows={6}
                  />
                </div>
                <MagneticButton className="btn btn-primary">
                  送信する <Send size={14} />
                </MagneticButton>
              </motion.form>

              {/* Office Info */}
              <motion.div
                className={styles.info}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.infoTitle}>オフィス情報</h3>

                <div className={styles.infoItem}>
                  <MapPin size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>住所</span>
                    <p>〒150-0001 東京都渋谷区神宮前5-10-1</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Phone size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>電話</span>
                    <p>03-1234-5678（平日 9:00〜18:00）</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Mail size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>メール</span>
                    <p>info@sumai.jp</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Globe size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>対応言語</span>
                    <p>日本語・英語・中国語・韓国語</p>
                  </div>
                </div>

                <div className={styles.mapPlaceholder}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.169!2d139.7053!3d35.6653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3b0396631%3A0x3c1d09f8e4c1b740!2sShibuya%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: "var(--radius-md)", opacity: 0.7 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="オフィスの場所"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSection}`} id="faq">
          <div className="container">
            <SectionLabel number="—" label="FAQ" />
            <h2 className={styles.faqTitle}>
              <AnimatedText text="よくある質問" />
            </h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
