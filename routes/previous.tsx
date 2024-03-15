import { Head } from "$fresh/runtime.ts";
import MoodNerd from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/mood-nerd.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Previous | Honjitsu</title>
      </Head>
      <div>
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <MoodNerd aria-hidden="true" size={80} />
          <h1 className="text-4xl font-bold mt-6">
            WIP - Previous articles page
          </h1>
          <p className="my-4">
            This page is currently a work in progress.
          </p>
          <a href="/" className="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
