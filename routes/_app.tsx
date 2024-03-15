import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="ja">
      <head prefix="og: https://ogp.me/ns#">
        <meta charset="utf-8" />

        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Honjitsu</title>

        <link rel="stylesheet" href="/styles.css" />

        <meta property="og:url" content={Deno.env.get("DEPLOY_URL")} />
        <meta property="og:title" content={"Honjitsu"} />
        <meta property="og:description" content={"Honjitsu"} />
        <meta property="og:site_name" content={"Honjitsu"} />
        <meta
          property="og:image"
          content={Deno.env.get("DEPLOY_URL") + "/ogp.png"}
        />
        <meta name="twitter:title" content={"Honjitsu"} />
        <meta name="twitter:description" content={"Honjitsu"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={Deno.env.get("DEPLOY_URL") + "/ogp.png"}
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
