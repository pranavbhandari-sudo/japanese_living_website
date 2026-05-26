"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel number="—" label="PRIVACY" />
              <h1 className={styles.heroTitle}>
                <AnimatedText text="プライバシーポリシー" />
              </h1>
              <p className={styles.heroSub}>最終更新日: 2024年4月1日</p>
            </motion.div>
          </div>
        </section>

        <section className={`section ${styles.contentSection}`}>
          <div className="container">
            <div className={styles.layout}>
              <nav className={styles.toc}>
                <h3 className={styles.tocTitle}>目次</h3>
                <ul>
                  <li><a href="#section-1">1. 個人情報の収集</a></li>
                  <li><a href="#section-2">2. 利用目的</a></li>
                  <li><a href="#section-3">3. 第三者提供</a></li>
                  <li><a href="#section-4">4. 安全管理措置</a></li>
                  <li><a href="#section-5">5. Cookie の使用</a></li>
                  <li><a href="#section-6">6. お問い合わせ</a></li>
                </ul>
              </nav>

              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <article id="section-1" className={styles.article}>
                  <h2>1. 個人情報の収集について</h2>
                  <p>
                    当社は、サービスの提供にあたり、以下の個人情報を収集することがあります。
                  </p>
                  <ul>
                    <li>氏名、メールアドレス、電話番号</li>
                    <li>在留カード情報、ビザの種類</li>
                    <li>勤務先・学校名</li>
                    <li>お問い合わせ内容</li>
                    <li>アクセスログ、IPアドレス、ブラウザ情報</li>
                  </ul>
                </article>

                <article id="section-2" className={styles.article}>
                  <h2>2. 利用目的</h2>
                  <p>収集した個人情報は、以下の目的で利用いたします。</p>
                  <ul>
                    <li>物件情報の提供およびご案内</li>
                    <li>賃貸契約に関するサポート</li>
                    <li>お問い合わせへの回答</li>
                    <li>サービスの改善および新機能の開発</li>
                    <li>重要なお知らせやメンテナンス情報の通知</li>
                    <li>利用規約に違反する行為の検知・防止</li>
                  </ul>
                </article>

                <article id="section-3" className={styles.article}>
                  <h2>3. 第三者への提供</h2>
                  <p>
                    当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
                  </p>
                  <ul>
                    <li>お客様の同意がある場合</li>
                    <li>法令に基づく開示要請がある場合</li>
                    <li>賃貸契約の締結に必要な範囲で、物件所有者・管理会社に提供する場合</li>
                    <li>保証会社による審査に必要な場合</li>
                  </ul>
                </article>

                <article id="section-4" className={styles.article}>
                  <h2>4. 安全管理措置</h2>
                  <p>
                    当社は、個人情報の漏えい、滅失またはき損を防止するため、適切なセキュリティ対策を講じています。
                    SSL暗号化通信の導入、アクセス制御、定期的なセキュリティ監査を実施しています。
                  </p>
                </article>

                <article id="section-5" className={styles.article}>
                  <h2>5. Cookie の使用について</h2>
                  <p>
                    当サイトでは、ユーザー体験の向上およびアクセス分析のためにCookieを使用しています。
                    ブラウザの設定によりCookieの受け入れを拒否することができますが、
                    一部の機能がご利用いただけなくなる場合があります。
                  </p>
                </article>

                <article id="section-6" className={styles.article}>
                  <h2>6. お問い合わせ</h2>
                  <p>
                    個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                  </p>
                  <p>
                    住まい株式会社 個人情報保護管理者<br />
                    〒150-0001 東京都渋谷区神宮前5-10-1<br />
                    メール: privacy@sumai.jp<br />
                    電話: 03-1234-5678
                  </p>
                </article>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
