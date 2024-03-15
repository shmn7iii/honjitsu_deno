import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component, route }: PageProps) {
  return (
    <div className="flex flex-col min-h-dvh px-12 py-6 lg:px-44">
      <Header active={route} />
      <main className="h-full w-full py-12 flex flex-col items-center md:mt-10">
        <Component />
      </main>
      <Footer />
    </div>
  );
}
