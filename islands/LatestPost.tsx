import Post from "../components/post/Post.tsx";
import Error from "../components/Error.tsx";
import { useSizumeLatestPost } from "../hooks/sizume/useSizumeLatestPost.ts";

export function LatestPost() {
  const [{ loading, error, result }] = useSizumeLatestPost();

  if (error) {
    return <Error message={error || "Any post not found."} />;
  }

  return (
    <Post
      loading={loading}
      slug={result?.post.slug || null}
      title={result?.post.title || null}
      body={result?.post.bodyHtml || null}
    />
  );
}
