"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "物件を探す", href: "/#listings" },
  { label: "私たちについて", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      const id = requestAnimationFrame(() => setIsOpen(false));
      return () => cancelAnimationFrame(id);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoJp}>住まい</span>
            <span className={styles.logoEn}>SUMAI</span>
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.rightGroup}>
            <div className={styles.langToggle}>
              <button className={styles.langActive}>JP</button>
              <span className={styles.langDivider}>|</span>
              <button className={styles.langInactive}>EN</button>
            </div>

            <button
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニュー"
              id="nav-hamburger"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.mobileInner}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.mobileLinkNumber}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className={styles.mobileFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p>info@sumai.jp</p>
                <p>03-1234-5678</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
