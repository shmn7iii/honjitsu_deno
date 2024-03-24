type Props = {
  loading: boolean;
  slug: string;
};

export default function SendLetterButton({ loading, slug }: Props) {
  return (
    <div className="flex justify-center mt-16">
      <a href={`https://sizu.me/sttnbnb/posts/${slug}`}>
        <button
          disabled={loading}
          className={"relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100" +
            (loading ? " cursor-not-allowed" : "")}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Send letter
          </span>
        </button>
      </a>
    </div>
  );
}
