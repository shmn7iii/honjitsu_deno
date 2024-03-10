type Props = {
  loading: boolean;
  date: string | null;
};

export default function PostDate({ loading, date }: Props) {
  if (loading || date == null) {
    return (
      <div className="flex justify-center">
        <div class="h-5 bg-gray-200 rounded-full w-32 md:w-40 mt-2 mb-6">
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-md md:text-xl text-gray-500 text-center mt-2 mb-6">
        {date}
      </h2>
    </>
  );
}
