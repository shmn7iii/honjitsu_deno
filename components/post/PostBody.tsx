type Props = {
  body: string;
};

export default function PostBody({ body }: Props) {
  return (
    <div
      className="prose-sm md:prose prose-img:h-auto prose-img:max-w-auto md:prose-img:max-w-lg prose-img:mx-auto prose-img:rounded-lg prose-img:shadow-xl"
      dangerouslySetInnerHTML={{ __html: body }}
    >
    </div>
  );
}
