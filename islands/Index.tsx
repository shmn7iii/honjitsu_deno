import { useState } from "preact/hooks";
import { useSizumePosts } from "../hooks/sizume/useSizumePosts.ts";
import { useSizumePost } from "../hooks/sizume/useSizumePost.ts";
import Error from "../components/Error.tsx";
import Pagination from "../components/Pagination.tsx";
import Post from "../components/post/Post.tsx";
import PostSkeleton from "../components/post/PostSkeleton.tsx";

export function Index() {
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(0);
  const [{ loading: loadingPosts, error: errorPosts, result: resultPosts }] =
    useSizumePosts();

  if (loadingPosts || !resultPosts) {
    return (
      <>
        <Pagination
          currentPostIndex={currentPostIndex}
          setCurrentPostIndex={setCurrentPostIndex}
        />
        <PostSkeleton />
      </>
    );
  }
  if (errorPosts) {
    return <Error message={errorPosts} />;
  }

  const [{ loading: loadingPost, error: errorPost, result: resultPost }] =
    useSizumePost(resultPosts.posts[currentPostIndex].slug);

  if (loadingPost || !resultPost) {
    return (
      <>
        <Pagination
          currentPostIndex={currentPostIndex}
          setCurrentPostIndex={setCurrentPostIndex}
        />
      </>
    );
  }
  if (errorPost) {
    return <Error message={errorPost} />;
  }

  return (
    <>
      <Pagination
        currentPostIndex={currentPostIndex}
        setCurrentPostIndex={setCurrentPostIndex}
      />

      <Post
        slug={resultPost.post.slug}
        title={resultPost.post.title}
        body={resultPost.post.bodyHtml || ""}
      />
    </>
  );
}
