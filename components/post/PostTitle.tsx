type Props = {
  title: string;
};

export default function PostTitle({ title }: Props) {
  return (
    <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-6">
      {title || "無題"}
    </h1>
  );
}
