import PostBody from "./PostBody.tsx";
import PostDate from "./PostDate.tsx";
import PostTitle from "./PostTitle.tsx";
import SendLetterButton from "./SendLetterButton.tsx";

type Props = {
  loading: boolean;
  slug: string | null;
  title: string | null;
  body: string | null;
};

export default function Post({ loading, slug, title, body }: Props) {
  return (
    <div className="max-w-[640px] md:w-[640px]">
      <PostTitle loading={loading} title={title?.split(" ")[1] || null} />
      <PostDate loading={loading} date={title?.split(" ")[0] || null} />
      <PostBody loading={loading} body={body} />
      <SendLetterButton loading={loading} slug={slug || "dummy"} />
    </div>
  );
}
