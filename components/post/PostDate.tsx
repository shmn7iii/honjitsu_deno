type Props = {
  date: string;
};

export default function PostDate({ date }: Props) {
  return (
    <h2 className="text-md md:text-xl text-gray-500 text-center mt-2 mb-6">
      {date}
    </h2>
  );
}
