import PostBody from "./PostBody.tsx";
import PostTitle from "./PostTitle.tsx";
import SendLetterButton from "./SendLetterButton.tsx";

type Props = {
  slug: string;
  title: string;
  body: string;
};

export default function Post({ slug, title, body }: Props) {
  return (
    <div className="max-w-[640px] md:w-[640px]">
      <PostTitle title={title?.split(" ")[1]} />
      <PostBody body={body} />
      <SendLetterButton slug={slug} />
    </div>
  );
}
