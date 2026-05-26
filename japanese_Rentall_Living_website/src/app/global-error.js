"use client";

export const dynamic = "force-dynamic";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ja">
      <body
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
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            エラーが発生しました
          </h2>
          <p style={{ color: "#8B9EA8", marginBottom: "2rem" }}>
            予期せぬエラーが発生しました。再度お試しください。
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 2rem",
              background: "#C9A84C",
              color: "#0A0A0F",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            再試行する
          </button>
        </div>
      </body>
    </html>
  );
}
