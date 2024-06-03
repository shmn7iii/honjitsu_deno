import CalendarSmile from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/calendar-smile.tsx";
import ArrowBadgeLeft from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/arrow-badge-left.tsx";
import ArrowBadgeRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/arrow-badge-right.tsx";

type Props = {
  currentPostIndex: number;
  setCurrentPostIndex: (index: number) => void;
};

export default function Pagination(
  { currentPostIndex, setCurrentPostIndex }: Props,
) {
  return (
    <div className="flex mb-8">
      <button
        onClick={() => setCurrentPostIndex(currentPostIndex - 1)}
        disabled={currentPostIndex == 0}
        className={"flex items-center justify-center px-3 h-8 me-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700" +
          (currentPostIndex == 0 ? " bg-gray-100 text-gray-500 cursor-not-allowed" : " bg-white text-gray-700")}
      >
        <ArrowBadgeLeft aria-hidden="true" size={20} />
      </button>
      <button
        onClick={() => setCurrentPostIndex(0)}
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <CalendarSmile aria-hidden="true" size={20} className="me-2" />
        Today
      </button>
      <button
        onClick={() => setCurrentPostIndex(currentPostIndex + 1)}
        disabled={currentPostIndex == 29}
        className={"flex items-center justify-center px-3 h-8 me-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700" +
          (currentPostIndex == 29 ? " bg-gray-100 text-gray-500 cursor-not-allowed" : " bg-white text-gray-700")}
      >
        <ArrowBadgeRight aria-hidden="true" size={20} />
      </button>
    </div>
  );
}
