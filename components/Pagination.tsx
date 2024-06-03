import CalendarSmile from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/calendar-smile.tsx";
import ArrowBadgeLeft from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/arrow-badge-left.tsx";
import ArrowBadgeRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/arrow-badge-right.tsx";

type Props = {
  date: string;
  currentPostIndex: number;
  setCurrentPostIndex: (index: number) => void;
};

export default function Pagination(
  { date, currentPostIndex, setCurrentPostIndex }: Props,
) {
  return (
    <div className="flex mb-8">
      <button
        onClick={() => setCurrentPostIndex(currentPostIndex - 1)}
        disabled={currentPostIndex == 0}
        className={"mx-1 px-2 h-8 text-sm font-medium rounded-lg" +
          (currentPostIndex == 0 ? " text-gray-300 cursor-not-allowed" : " text-gray-700")}
      >
        <ArrowBadgeLeft aria-hidden="true" size={20} />
      </button>

      <div className="flex">
        <button
          onClick={() => setCurrentPostIndex(0)}
          className="inline-flex items-center mx-0 h-8 px-3 text-gray-500 border border-e-0 border-gray-300 rounded-e-0 rounded-s-lg hover:text-gray-700 hover:bg-gray-100"
        >
          <CalendarSmile aria-hidden="true" size={20} />
        </button>
        <div className="flex items-center justify-center h-8 w-32 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-s-0 rounded-e-lg">
          {date}
        </div>
      </div>

      <button
        onClick={() => setCurrentPostIndex(currentPostIndex + 1)}
        disabled={currentPostIndex == 29}
        className={"mx-1 px-2 h-8 text-sm font-medium rounded-lg" +
          (currentPostIndex == 29 ? " text-gray-300 cursor-not-allowed" : " text-gray-700")}
      >
        <ArrowBadgeRight aria-hidden="true" size={20} />
      </button>
    </div>
  );
}
