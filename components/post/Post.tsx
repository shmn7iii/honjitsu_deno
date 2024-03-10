import PostBody from "./PostBody.tsx";
import PostDate from "./PostDate.tsx";
import PostTitle from "./PostTitle.tsx";

type Props = {
  loading: boolean;
  title: string | null;
  body: string | null;
};

export default function Post({ loading, title, body }: Props) {
  return (
    <div className="max-w-[640px] md:w-[640px]">
      <PostTitle loading={loading} title={title?.split(" ")[1] || null} />
      <PostDate loading={loading} date={title?.split(" ")[0] || null} />
      <PostBody loading={loading} body={body} />
    </div>
  );
}
