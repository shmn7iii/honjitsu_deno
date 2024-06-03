import Send from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/send.tsx";

type Props = {
  slug: string;
};

export default function SendLetterButton({ slug }: Props) {
  return (
    <div className="flex justify-center mt-16">
      <a href={`https://sizu.me/sttnbnb/posts/${slug}`}>
        <button
          type="button"
          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        >
          <Send aria-hidden="true" size={20} />
          <span class="ms-2">Send a letter</span>
        </button>
      </a>
    </div>
  );
}
