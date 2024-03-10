import { useEffect, useState } from "preact/hooks";
import { Pagination, Post } from "./interfaces.ts";

export interface Response {
  post: Post;
}

export interface PostsResponse {
  posts: Post[];
  pagination: Pagination;
}

export type useSizumeLatestPostResult = [
  {
    loading: boolean;
    error: string | null;
    result: Response | null;
  },
];

export const useSizumeLatestPost = (): useSizumeLatestPostResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Response | null>(null);

  const getSizumePostSlug = async () => {
    setLoading(true);

    try {
      const postsResponse = await fetch(
        "./api/posts",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const postsData = (await postsResponse.json()) as PostsResponse;

      const slug = postsData.posts[0].slug;
      const response = await fetch(
        `./api/posts/${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = (await response.json()) as Response;

      setResult(data);
    } catch (err) {
      setError("Error occurred: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSizumePostSlug();
  }, []);

  return [{ loading, error, result }];
};
