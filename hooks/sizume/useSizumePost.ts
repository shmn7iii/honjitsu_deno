import { useEffect, useState } from "preact/hooks";
import { Post } from "./interfaces.ts";

export interface Response {
  post: Post;
}

export type useSizumePostResult = [
  {
    loading: boolean;
    error: string | null;
    result: Response | null;
  },
];

export const useSizumePost = (
  slug: string,
): useSizumePostResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Response | null>(null);

  const getSizumePost = async () => {
    setLoading(true);

    try {
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
    getSizumePost();
  }, [slug]);

  return [{ loading, error, result }];
};
