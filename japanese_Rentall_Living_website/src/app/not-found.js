"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0A0A0F",
        color: "#F5F0E8",
        fontFamily: "'Lora', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#C9A84C",
            fontSize: "1.2rem",
            letterSpacing: "0.2em",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          404 ERROR
        </span>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "3rem",
            fontWeight: 300,
            marginBottom: "1.5rem",
          }}
        >
          ページが見つかりません
        </h1>
        <p style={{ color: "#8B9EA8", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
          お探しのページは削除されたか、名前が変更されたか、一時的にご利用いただけない可能性があります。
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.85rem 2.5rem",
            background: "transparent",
            color: "#C9A84C",
            border: "1px solid #C9A84C",
            borderRadius: "9999px",
            cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
        >
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
