export type WP_Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  categories: number[];
  tags: number[];
  featured_media: number;
};
