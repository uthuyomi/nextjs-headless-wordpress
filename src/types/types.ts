export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type FeaturedMedia = {
  source_url: string;
};

export type Term = {
  id: number;
  name: string;
  taxonomy: string;
}

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
  categories?: Category[]; // 任意。数字の配列で来る場合は number[] に
  jetpack_featured_media_url?: string; // ← 追加（環境によりある場合だけ）
  _embedded?: {
    "wp:featuredmedia"?: FeaturedMedia[];
    "wp:term"?: Term[][]; // 必要に応じて型定義を追加
  };
};
