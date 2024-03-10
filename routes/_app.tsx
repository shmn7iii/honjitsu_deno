import { type PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function App(props: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>sttnbnb</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="flex flex-col min-h-dvh px-12 py-6 lg:px-44">
          <Header active={props.route} />
          <main className="h-full w-full py-12">
            <props.Component />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
