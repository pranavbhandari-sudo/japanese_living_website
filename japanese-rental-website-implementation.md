# 🏯 SUMAI（住まい）— Japanese House Rental Website
## Complete Implementation Guide

---

## 🎨 Design Philosophy & Aesthetic Direction

**Concept: "間 (Ma)" — The Art of Japanese Negative Space**

Inspired by Awwwards-winning sites, this design fuses **Wabi-sabi minimalism** with **Neo-Tokyo digital aesthetics**. Think: a luxury architectural magazine crossed with a Japanese art gallery — ink-wash textures, precise grid typography, and unexpected kinetic moments.

**Not generic. Not predictable. Unforgettable.**

---

## 🎨 Colour Palette

```
--color-void:       #0A0A0F   /* Deep space black (primary bg) */
--color-shoji:      #F5F0E8   /* Warm rice paper white */
--color-sumi:       #1C1C2E   /* Sumi ink navy */
--color-matcha:     #6B8F71   /* Muted matcha green (accent) */
--color-sakura:     #C9736A   /* Dusty terracotta / sakura red */
--color-gold:       #C9A84C   /* Antique gold */
--color-mist:       #8B9EA8   /* Cool grey mist */
--color-paper:      #EDE7D9   /* Aged paper */
--color-charcoal:   #2D2D3A   /* Card backgrounds */
```

**Theme: Dark primary (--color-void) with --color-shoji text. Accent pops of matcha + gold.**

---

## 🔤 Typography Stack

```css
/* Display / Hero Headlines */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

/* Japanese text rendering */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400&display=swap');

/* UI / Labels / Navigation */
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

/* Body copy */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&display=swap');
```

---

## 📦 Libraries & Frameworks

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "@gsap/react": "^2.1.0",
    "lenis": "^1.1.0",
    "three": "^0.162.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.99.0",
    "lucide-react": "^0.383.0",
    "react-intersection-observer": "^9.5.0",
    "react-router-dom": "^6.22.0",
    "tailwindcss": "^3.4.0",
    "clsx": "^2.1.0",
    "react-scroll": "^1.9.0"
  }
}
```

**Why this stack:**
- `framer-motion` → Page transitions, scroll-linked animations, layout animations
- `gsap` → Timeline-based hero animations, staggered reveals
- `lenis` → Buttery smooth scroll (used by Awwwards winners like Linear, Vercel)
- `three / r3f` → Optional: subtle 3D floating elements in hero
- `lucide-react` → Clean icon system

---

## 🗂️ Project File Structure

```
sumai/
├── public/
│   ├── favicon.ico
│   ├── fonts/                      # Self-hosted fallback fonts
│   └── images/
│       ├── hero/
│       │   ├── apartment-1.jpg     # Tokyo apartment interior
│       │   ├── apartment-2.jpg     # Traditional tatami room
│       │   └── city-aerial.jpg     # Night cityscape
│       ├── listings/               # Property photos
│       ├── about/                  # Team & office photos
│       └── textures/
│           ├── noise.png           # Grain overlay texture
│           └── paper.jpg           # Aged paper texture
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.jsx      # Minimal nav with slide-in menu
│   │   │   ├── Footer.jsx          # Rich footer with links
│   │   │   └── PageTransition.jsx  # Framer motion page wrapper
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Variants: primary, ghost, outline
│   │   │   ├── Tag.jsx             # Property type labels
│   │   │   ├── Divider.jsx         # Decorative ink-brush divider
│   │   │   ├── SectionLabel.jsx    # "01 / HERO" numbered labels
│   │   │   ├── AnimatedText.jsx    # Word-by-word reveal
│   │   │   ├── MagneticButton.jsx  # Cursor-following button effect
│   │   │   ├── Cursor.jsx          # Custom cursor component
│   │   │   └── NoiseOverlay.jsx    # Film grain texture overlay
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Split-screen kinetic hero
│   │   │   ├── Features.jsx        # Why rent with us
│   │   │   ├── Listings.jsx        # Property grid
│   │   │   ├── HowItWorks.jsx      # 3-step process
│   │   │   ├── Testimonials.jsx    # Marquee testimonials
│   │   │   ├── CityGuide.jsx       # Tokyo neighbourhood map
│   │   │   └── CallToAction.jsx    # Final CTA
│   │   │
│   │   └── three/
│   │       └── FloatingParticles.jsx  # Optional 3D ambiance
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── TermsOfUse.jsx
│   │   └── PrivacyPolicy.jsx
│   │
│   ├── hooks/
│   │   ├── useLenis.js             # Smooth scroll init
│   │   ├── useMousePosition.js     # Cursor tracking
│   │   └── useScrollProgress.js    # Scroll-linked values
│   │
│   ├── lib/
│   │   └── utils.js                # clsx helpers, formatters
│   │
│   ├── data/
│   │   ├── listings.js             # Apartment mock data (JP)
│   │   ├── neighborhoods.js        # Area data
│   │   └── team.js                 # About page team data
│   │
│   └── styles/
│       ├── globals.css             # CSS variables, resets, base
│       ├── animations.css          # Keyframe library
│       └── typography.css          # Type scale system
│
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🏠 Pages Specification

### 1. Home Page (`/`)

**Sections in order:**

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Split-screen kinetic layout (see below) |
| 2 | Ticker / Marquee | Scrolling city names + stats |
| 3 | Features | Why Sumai? 4-column asymmetric grid |
| 4 | Listings | Staggered property cards |
| 5 | How It Works | Horizontal scroll timeline |
| 6 | City Guide | Interactive neighbourhood selector |
| 7 | Testimonials | Full-width marquee |
| 8 | Call to Action | Immersive CTA |
| 9 | Footer | Full-width rich footer |

---

### 2. About Page (`/about`)

**Sections:**

| # | Section | Content (JP) |
|---|---------|--------------|
| 1 | Page Hero | "私たちについて" with parallax split image |
| 2 | Mission | Two-column editorial layout |
| 3 | Stats | Animated counters (物件数, 入居者数, 都市数) |
| 4 | Team | 3-column card grid with hover reveal |
| 5 | Values | Alternating image + text zigzag |
| 6 | CTA | Join us banner |

---

### 3. Contact Page (`/contact`)

**Sections:**

| # | Section | Details |
|---|---------|---------|
| 1 | Page Hero | "お問い合わせ" — minimal header with animated underline |
| 2 | Contact Form | Name, email, phone, message, send button |
| 3 | Office Info | Address, phone, email, map embed |
| 4 | FAQ Accordion | Expandable common questions |

---

### 4. Terms of Use (`/terms`)

Clean typographic layout, Japanese content, TOC sidebar.

---

### 5. Privacy Policy (`/privacy`)

Same layout as Terms, structured with numbered headings.

---

## 🦸 Hero Section — Unique Design (NO text-over-image)

### Concept: "Vertical Split Canvas"

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  LEFT PANEL (45%)          RIGHT PANEL (55%)            │
│  ──────────────            ──────────────────           │
│  Dark bg: #0A0A0F          Image: apartment interior    │
│                            with subtle parallax         │
│  Large serif headline      ────────────────────         │
│  "住む。                   ┌──────────────────┐         │
│   発見する。                │  Floating card:  │         │
│   東京で。"                 │  ★ 4.9 / 評価    │         │
│                            │  🏠 2,400+ 物件   │         │
│  Sub: foreigners &         └──────────────────┘         │
│  students welcome                                       │
│                            Vertical scroll indicator   │
│  [探す →] [詳細を見る]                                    │
│                                                         │
│  ── Scroll to explore ──                               │
└─────────────────────────────────────────────────────────┘
```

**Animation sequence (GSAP timeline):**
1. `t=0` → Left panel slides in from left (x: -100 → 0)
2. `t=0.3` → Right image reveals with clip-path wipe
3. `t=0.6` → Headline word-by-word stagger (opacity + y)
4. `t=1.0` → Floating card bounces in with spring
5. `t=1.2` → Buttons fade + slide up
6. Scroll: parallax on right image (-20% translateY)

---

## 🧩 Component Specifications

### Navigation Component

```jsx
// Behavior:
// - Transparent on hero, opaque on scroll
// - Logo: "住まい" in Cormorant Garamond
// - Links: ホーム / 物件 / 私たちについて / お問い合わせ
// - Mobile: Full-screen slide-in menu with staggered links
// - Hamburger: animated to × on open
// - Language toggle: JP | EN (top right)

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "物件を探す", href: "/#listings" },
  { label: "私たちについて", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
];
```

### Property Card Component

```jsx
// Layout: Vertical card with hover tilt (CSS perspective)
// Image: 16:9 ratio, zoom on hover
// Tags: エリア / タイプ / 価格 badges
// Bottom: CTA "詳細を見る →"
// Animation: Framer Motion whileHover scale + shadow

const sampleCard = {
  id: "TK-001",
  title: "渋谷区 1LDK アパートメント",
  area: "渋谷区",
  type: "1LDK",
  price: "¥85,000 / 月",
  size: "35㎡",
  features: ["バス・トイレ別", "エアコン", "インターネット無料"],
  image: "/images/listings/shibuya-1ldk.jpg",
  rating: 4.8,
  available: true,
};
```

### Testimonials Marquee

```jsx
// Two rows, opposite scroll directions
// Speed: CSS animation, paused on hover
// Cards: Name, nationality flag, quote, star rating
// 日本語 testimonials from foreigners/students

const testimonials = [
  {
    name: "サラ・チェン",
    nationality: "🇸🇬 シンガポール",
    quote: "住まいのおかげで、東京での生活が夢から現実になりました。",
    stars: 5,
    type: "留学生"
  },
  // ...
];
```

---

## 🎭 Transitions & Animations Library

### Page Transitions (Framer Motion)

```jsx
// Curtain wipe transition between pages
const pageVariants = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  exit:    { clipPath: "inset(0 0 0 100%)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};
```

### Scroll Reveal (Framer Motion + IntersectionObserver)

```jsx
// Staggered children reveal
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};
```

### Hover States

```css
/* Magnetic button effect — handled in MagneticButton.jsx */
/* Image card tilt — CSS custom properties updated via JS */
.card { transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)); }

/* Underline slide animation */
.nav-link::after {
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
}
.nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
```

### Lenis Smooth Scroll Init

```jsx
// hooks/useLenis.js
import Lenis from 'lenis';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => lenis.destroy();
  }, []);
};
```

---

## 📄 Page Content (Japanese)

### Home Page

```
// Hero
メインヘッドライン: "住む。発見する。東京で。"
サブタイトル: "外国人・留学生のための、理想のお部屋探し"
CTAボタン1: "物件を探す →"
CTAボタン2: "詳細を見る"

// Features Section Title
"なぜ住まいを選ぶのか"

// Features
1. 🏠 豊富な物件数       — 2,400件以上の厳選物件
2. 🌏 多言語サポート      — 日本語・英語・中国語対応
3. ✍️ 手続きが簡単       — 書類作成から契約まで完全サポート
4. 🔑 即入居可能         — 最短3日で入居可能な物件多数

// Section Label
"人気エリアの物件"

// How It Works
ステップ1: "物件を選ぶ"    — 条件を入力してお気に入りを見つけよう
ステップ2: "内見を申し込む" — オンライン・現地どちらでも対応
ステップ3: "契約・入居"    — 最短3日で新生活スタート
```

### About Page

```
ページタイトル: "私たちについて"
ミッション見出し: "日本での暮らしを、もっと身近に。"
ミッション本文:
  "住まいは、2015年に設立された外国人・留学生向けの
   不動産プラットフォームです。言語の壁や複雑な手続きを
   乗り越え、誰もが安心して日本での生活を始められるよう、
   私たちは日々サポートを続けています。"

統計:
  - 2,400+  掲載物件数
  - 15,000+ 入居者数
  - 12      対応都市数
  - 98%     満足度

チーム:
  - 田中 誠     / 代表取締役
  - 山田 花子   / 物件開発部長
  - アレックス・チェン / 国際サポート部長
```

### Contact Page

```
ページタイトル: "お問い合わせ"
フォーム:
  - お名前（必須）
  - メールアドレス（必須）
  - 電話番号
  - お問い合わせ内容（テキストエリア）
  - 送信ボタン: "送信する →"

オフィス情報:
  住所: 〒150-0001 東京都渋谷区神宮前5-10-1
  電話: 03-1234-5678（平日 9:00〜18:00）
  メール: info@sumai.jp
  対応言語: 日本語・英語・中国語・韓国語

よくある質問（FAQ）:
  Q: 外国人でも賃貸契約できますか？
  A: はい、在留カードをお持ちの方であればご契約いただけます。

  Q: 保証人がいなくても入居できますか？
  A: 保証会社のご利用で、保証人なしでも入居可能です。

  Q: 初期費用はどのくらいかかりますか？
  A: 一般的に家賃の2〜4ヶ月分が目安です。敷金・礼金なし物件もあります。
```

### Footer Content

```
// Column 1: ブランド
ロゴ: 住まい
キャッチ: "日本での、理想の暮らしを。"

// Column 2: サービス
物件を探す
エリアから探す
間取りから探す
家賃相場を調べる

// Column 3: サポート
よくある質問
お問い合わせ
入居ガイド
多言語サポート

// Column 4: 会社情報
私たちについて
採用情報
プレスリリース
パートナー

// フッターボトム
© 2024 住まい株式会社 All Rights Reserved.
[利用規約]  [プライバシーポリシー]  [特定商取引法に基づく表示]
```

---

## ⚙️ CSS Variables & Global Styles (`globals.css`)

```css
:root {
  /* Colors */
  --color-void:     #0A0A0F;
  --color-shoji:    #F5F0E8;
  --color-sumi:     #1C1C2E;
  --color-matcha:   #6B8F71;
  --color-sakura:   #C9736A;
  --color-gold:     #C9A84C;
  --color-mist:     #8B9EA8;
  --color-paper:    #EDE7D9;
  --color-charcoal: #2D2D3A;

  /* Typography */
  --font-display: 'Cormorant Garamond', serif;
  --font-jp:      'Noto Serif JP', serif;
  --font-mono:    'DM Mono', monospace;
  --font-body:    'Lora', serif;

  /* Spacing scale (8pt base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Easing curves */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.76, 0, 0.24, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Z-index scale */
  --z-below: -1;
  --z-base: 0;
  --z-overlay: 10;
  --z-nav: 100;
  --z-cursor: 9999;
}

/* Grain overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('/images/textures/noise.png');
  opacity: 0.03;
  pointer-events: none;
  z-index: var(--z-cursor);
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 2px; }
::-webkit-scrollbar-track { background: var(--color-void); }
::-webkit-scrollbar-thumb { background: var(--color-gold); }

/* Selection */
::selection {
  background: var(--color-matcha);
  color: var(--color-shoji);
}
```

---

## 🌐 Tailwind Config (`tailwind.config.js`)

```js
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void:     '#0A0A0F',
        shoji:    '#F5F0E8',
        sumi:     '#1C1C2E',
        matcha:   '#6B8F71',
        sakura:   '#C9736A',
        gold:     '#C9A84C',
        mist:     '#8B9EA8',
        paper:    '#EDE7D9',
        charcoal: '#2D2D3A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        jp:      ['Noto Serif JP', 'serif'],
        mono:    ['DM Mono', 'monospace'],
        body:    ['Lora', 'serif'],
      },
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'marquee-r':  'marquee-r 35s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'grain':      'grain 0.5s steps(2) infinite',
      },
      keyframes: {
        marquee:   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'marquee-r': { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        grain:     { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(-2%,-3%)' } },
      },
    },
  },
  plugins: [],
};
```

---

## 🖥️ Key Component Code Snippets

### AnimatedText.jsx — Word-by-word reveal

```jsx
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, className }) => {
  const words = text.split(' ');
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ y: '110%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
```

### MagneticButton.jsx

```jsx
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.button>
  );
};
```

### PageTransition.jsx

```jsx
import { motion, AnimatePresence } from 'framer-motion';

export const PageTransition = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
/* sm: 640px  — large phones */
/* md: 768px  — tablets */
/* lg: 1024px — desktop */
/* xl: 1280px — wide desktop */
/* 2xl: 1536px — ultra wide */

/* Hero: Stack vertically on mobile */
/* Navigation: Hamburger menu below lg */
/* Property grid: 1col → 2col → 3col */
/* Typography: Scale down 20-30% on mobile */
```

---

## ✅ Implementation Checklist

### Phase 1 — Foundation
- [ ] Initialize Vite + React project
- [ ] Install all dependencies
- [ ] Configure Tailwind with custom tokens
- [ ] Set up React Router DOM routes
- [ ] Add Google Fonts imports
- [ ] Create global CSS variables
- [ ] Build NoiseOverlay component

### Phase 2 — Layout Shell
- [ ] Navigation component (transparent → opaque)
- [ ] Mobile hamburger menu with framer-motion
- [ ] Footer with all 4 columns + legal links
- [ ] PageTransition wrapper
- [ ] Custom cursor (Cursor.jsx)
- [ ] Lenis smooth scroll hook

### Phase 3 — Home Page
- [ ] Hero section (split canvas)
- [ ] GSAP hero animation timeline
- [ ] Marquee ticker
- [ ] Features section
- [ ] Listings grid with cards
- [ ] How It Works horizontal scroll
- [ ] Testimonials marquee
- [ ] CTA section

### Phase 4 — Secondary Pages
- [ ] About page with all sections
- [ ] Contact page + form
- [ ] Terms of Use page
- [ ] Privacy Policy page

### Phase 5 — Polish
- [ ] Scroll-triggered reveals on all sections
- [ ] Hover micro-interactions
- [ ] Page transitions between routes
- [ ] Mobile responsiveness QA
- [ ] Performance audit (lazy images, bundle split)
- [ ] Accessibility review (focus states, ARIA)

---

## 🚀 Getting Started

```bash
# 1. Create project
npm create vite@latest sumai -- --template react
cd sumai

# 2. Install dependencies
npm install framer-motion gsap lenis three @react-three/fiber @react-three/drei \
  lucide-react react-intersection-observer react-router-dom react-scroll clsx

# 3. Install dev dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Start dev server
npm run dev
```

---

## 🎯 Awwwards-Inspired Design Principles Applied

| Principle | Implementation |
|-----------|----------------|
| **Split asymmetric layouts** | Hero: 45/55 panel split, off-grid property cards |
| **Purposeful negative space** | Generous padding, "ma" between sections |
| **Typography as art** | Cormorant Garamond headlines at 96-120px |
| **Kinetic moments** | GSAP hero, scroll-linked parallax, marquee rows |
| **Film grain texture** | CSS noise overlay, subtle paper texture on cards |
| **Custom cursor** | Expanding dot cursor that follows mouse |
| **Ink-brush aesthetics** | Decorative SVG dividers, brushstroke accents |
| **Dark luxury palette** | Deep void black + warm gold + matcha green |
| **Numbered section labels** | "01 — VISION" style editorial labelling |
| **Smooth scroll** | Lenis for physics-based scroll inertia |

---

*住まい (Sumai) — Making Japan home, one apartment at a time.*
