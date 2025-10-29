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
  categories?: number[]; // WPが返すカテゴリID配列（軽量取得時用)
  jetpack_featured_media_url?: string;
  _embedded?: {
    "wp:featuredmedia"?: any[];
    "wp:term"?: Term[][]; // 各タクソノミーごとの Term 配列（カテゴリ・タグなどが入る）
  };
};

// 通常のTerm型（タグやカスタムタクソノミーも含む汎用）
export type Term = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

export type Props = {
  posts?: Post[]; // ← undefined許容（安全のため）
  noimg: string;
};
