export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string | null;
  path: string;
  schema: string | null;
}
