export type Post = {
  _id: string;
  posterId: string;
  title: string;
  reputation: number;
  description?: string;
  imagesPath: string[];
  commentsId: string[];
}