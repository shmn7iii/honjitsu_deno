import { LatestPost } from "../islands/LatestPost.tsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10">
      <LatestPost />
    </div>
  );
}
