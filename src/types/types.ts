export type Category = {
    id: number;
    name: string;
    slug: string;
}

export type Post = {
    id: number;
    title: string;
    content: string;
    date: string;
    categories?: Category[];
    eyecatch?: {
        url: string;
    }
}