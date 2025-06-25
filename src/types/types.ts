// taxonomy: "category" に限定されたカテゴリ型
export type Category = {
  id: number;
  name: string;
  slug: string;
  taxonomy: "category";
};

// 通常のTerm型（タグやカスタムタクソノミーも含む汎用）
export type Term = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

// アイキャッチ画像など
export type FeaturedMedia = {
  source_url: string;
};

// 投稿記事型
export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  categories?: number[]; // WPが返すカテゴリID配列（軽量取得時用）
  jetpack_featured_media_url?: string;
  _embedded?: {
    "wp:featuredmedia"?: FeaturedMedia[];
    "wp:term"?: Term[][]; // 各タクソノミーごとの Term 配列（カテゴリ・タグなどが入る）
  };
};
