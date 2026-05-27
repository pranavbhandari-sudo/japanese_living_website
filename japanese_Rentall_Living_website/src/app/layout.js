import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata = {
  title: "住まい（SUMAI）— 外国人・留学生のための理想のお部屋探し",
  description:
    "東京で外国人・留学生向けの賃貸物件をお探しなら住まい。2,400件以上の厳選物件、多言語サポート、最短3日入居可能。",
  keywords: "東京, 賃貸, 外国人, 留学生, アパート, 住まい, rental, Tokyo",
  openGraph: {
    title: "住まい（SUMAI）— Japanese House Rental",
    description: "Making Japan home, one apartment at a time.",
    locale: "ja_JP",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <SmoothScroll />
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
