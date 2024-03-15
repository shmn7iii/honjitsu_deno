import { Head } from "$fresh/runtime.ts";
import MoodPuzzled from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/mood-puzzled.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <MoodPuzzled aria-hidden="true" size={80} />
          <h1 className="text-4xl font-bold mt-6">
            404 - Page not found
          </h1>
          <p className="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" className="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
