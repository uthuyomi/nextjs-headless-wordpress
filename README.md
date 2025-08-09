# Headless WordPress Blog with Next.js App Router

Next.js 15(App Router)とWordPress REST APIを使用し、ヘッドレスCMS構成のブログサイトを構築しました。  
フロントは静的生成(ISR)やサーバーサイドレンダリング(SSR)を用途に応じて切り替え、WordPressはデータ提供専用に使用しています。  
**目的**：個人学習と技術検証、およびヘッドレスCMS構成の実装経験獲得。

---

## 📂 ディレクトリ構成

src/app/
├─ page.tsx # トップページ（/）
├─ layout.tsx # 共通レイアウト
│
├─ about/
│ └─ page.tsx # /about - プロフィールページ
│
├─ archive/
│ └─ page.tsx # /archive - 全件アーカイブ
│
├─ blog/
│ └─ [slug]/
│ └─ page.tsx # /blog/[slug] - 記事詳細ページ
│
└─ category/
├─ page.tsx # /category - カテゴリ一覧トップ
└─ [category]/
└─ page.tsx # /category/[slug] - カテゴリ別記事一覧

---

### 🔹 ページ一覧

| パス                 | 役割                         | データ取得                         |
|---------------------|-----------------------------|------------------------------------|
| `/`                 | トップページ                 | `data.json` + Swiper（CSR）        |
| `/about`            | プロフィールページ           | 静的 / `data.json`                 |
| `/archive`          | 全件アーカイブ               | WordPress REST API（SSR）          |
| `/category`         | カテゴリ一覧スライダー       | WordPress REST API（CSR）          |
| `/category/[slug]`  | カテゴリ別記事一覧           | WordPress REST API（SSR）          |
| `/blog/[slug]`      | 記事詳細ページ               | WordPress REST API（ISR/SSR）      |

---

## ⚡ 使用技術

- **Next.js 15 (App Router)**
- **React 18**
- **TypeScript**
- **WordPress REST API**
- **Swiper.js**（カテゴリスライダー）
- **SCSS Modules**
- **ISR / SSR / CSR を用途に応じて使い分け**

---

## 🖼 画像対応

- 外部画像（WordPressのアイキャッチ）は `next/image` で最適化
- `next.config.js` に外部ドメインを登録済み

---

## 🚀 開発環境

```bash
# パッケージインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
npm run start
