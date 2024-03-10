import { useEffect, useState } from "preact/hooks";
import { Pagination, Post } from "./interfaces.ts";

export interface Response {
  posts: Post[];
  pagination: Pagination;
}

export type useSizumePostsResult = [
  {
    loading: boolean;
    error: string | null;
    result: Response | null;
  },
];

export const useSizumePosts = (): useSizumePostsResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Response | null>(null);

  // TODO: move to .env
  const url = "http://localhost:8000/api/posts";

  const getSizumePosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(new URL(url), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as Response;

      setResult(data);
    } catch (err) {
      setError("Error occurred: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSizumePosts();
  }, []);

  return [{ loading, error, result }];
};
