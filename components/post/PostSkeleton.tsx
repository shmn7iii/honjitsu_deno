export default function PostSkeleton() {
  return (
    <div className="max-w-[640px] md:w-[640px]">
      {/* Title */}
      <div className="flex justify-center">
        <div className="h-5 md:h-10 bg-gray-200 rounded-full w-72 md:w-96 mt-2 mb-6">
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full w-64 mb-6"></div>
      </div>
    </div>
  );
}
