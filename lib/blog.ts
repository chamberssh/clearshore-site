export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
};

export const posts: BlogPost[] = [];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
