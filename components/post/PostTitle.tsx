type Props = {
  title: string;
};

export default function PostTitle({ title }: Props) {
  return (
    <h1 className="text-2xl md:text-4xl font-extrabold text-center my-2">
      {title}
    </h1>
  );
}
