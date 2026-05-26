"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./legal.module.css";

export default function TermsPage() {
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
              <SectionLabel number="—" label="LEGAL" />
              <h1 className={styles.heroTitle}>
                <AnimatedText text="利用規約" />
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
                  <li><a href="#article-1">第1条 総則</a></li>
                  <li><a href="#article-2">第2条 定義</a></li>
                  <li><a href="#article-3">第3条 サービスの内容</a></li>
                  <li><a href="#article-4">第4条 利用登録</a></li>
                  <li><a href="#article-5">第5条 禁止事項</a></li>
                  <li><a href="#article-6">第6条 免責事項</a></li>
                  <li><a href="#article-7">第7条 規約の変更</a></li>
                </ul>
              </nav>

              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <article id="article-1" className={styles.article}>
                  <h2>第1条（総則）</h2>
                  <p>
                    本利用規約（以下「本規約」といいます）は、住まい株式会社（以下「当社」といいます）が
                    提供する不動産情報サービス「住まい」（以下「本サービス」といいます）の利用条件を定めるものです。
                    ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
                  </p>
                </article>

                <article id="article-2" className={styles.article}>
                  <h2>第2条（定義）</h2>
                  <p>本規約において使用する用語の定義は以下の通りです。</p>
                  <ul>
                    <li>「本サービス」とは、当社が運営する不動産情報提供プラットフォームを指します。</li>
                    <li>「ユーザー」とは、本サービスを利用するすべての個人を指します。</li>
                    <li>「登録ユーザー」とは、本サービスに会員登録を行ったユーザーを指します。</li>
                    <li>「物件情報」とは、本サービス上で提供される賃貸物件に関する情報を指します。</li>
                  </ul>
                </article>

                <article id="article-3" className={styles.article}>
                  <h2>第3条（サービスの内容）</h2>
                  <p>
                    当社は、以下のサービスを提供します。
                  </p>
                  <ul>
                    <li>外国人・留学生向け賃貸物件の情報提供</li>
                    <li>物件の内見予約サービス</li>
                    <li>賃貸契約に関するサポート</li>
                    <li>多言語でのカスタマーサポート</li>
                    <li>入居後の生活サポート情報の提供</li>
                  </ul>
                </article>

                <article id="article-4" className={styles.article}>
                  <h2>第4条（利用登録）</h2>
                  <p>
                    本サービスの一部機能をご利用いただくためには、会員登録が必要です。
                    登録にあたっては、正確かつ最新の情報をご提供いただく必要があります。
                    虚偽の情報による登録が判明した場合、当社はアカウントを停止または削除する権利を有します。
                  </p>
                </article>

                <article id="article-5" className={styles.article}>
                  <h2>第5条（禁止事項）</h2>
                  <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                  <ul>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>当社または第三者の知的財産権を侵害する行為</li>
                    <li>本サービスの運営を妨害する行為</li>
                    <li>他のユーザーに不利益を与える行為</li>
                    <li>虚偽の情報を登録する行為</li>
                    <li>本サービスを営利目的で無断使用する行為</li>
                  </ul>
                </article>

                <article id="article-6" className={styles.article}>
                  <h2>第6条（免責事項）</h2>
                  <p>
                    当社は、本サービスで提供する物件情報の正確性、完全性、有用性について保証するものではありません。
                    物件情報は物件所有者から提供されたものであり、実際の状況と異なる場合があります。
                    ユーザーは、物件情報を参考として利用し、契約前に必ず現地確認を行ってください。
                  </p>
                </article>

                <article id="article-7" className={styles.article}>
                  <h2>第7条（規約の変更）</h2>
                  <p>
                    当社は、必要に応じて本規約を変更することがあります。
                    変更後の規約は、本サービス上で公開した時点から効力を生じるものとします。
                    重要な変更がある場合は、メールまたは本サービス上のお知らせにてユーザーに通知します。
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
