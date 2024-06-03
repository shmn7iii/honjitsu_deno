import CalendarSmile from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/calendar-smile.tsx";
import SignRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/sign-right.tsx";
import SignLeft from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/sign-left.tsx";

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
        <SignLeft aria-hidden="true" size={20} className="me-1" />
        Tomorrow
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
        Yesterday
        <SignRight aria-hidden="true" size={20} className="ms-1" />
      </button>
    </div>
  );
}
