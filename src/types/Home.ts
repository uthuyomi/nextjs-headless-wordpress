//Hero
export type HeroProps = {
  hero: {
    title: string;
    subtitle: string;
    buttontext: string;
    buttonlink: string;
    imageUrl: string;
  };
};
//Category
export type WP_Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
};

export type CategoryProps = {
  category: {
    title: string;
    noDescription: string;
    more: string;
  };
};
//News
export type NewsProps = {
  newsPost: Post[];
  news: {
    title: string;
    noimg: string;
    linkLabel: string;
  };
};
//profile
export type ProfileProps = {
  about: {
    title: string;
    content: string;
    imageUrl: string;
    aboutText: string;
    aboutLink: string;
  };
};