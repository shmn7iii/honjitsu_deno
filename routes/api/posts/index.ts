import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const token = Deno.env.get("SIZUME_API_TOKEN");

    const response = await fetch(
      `https://sizu.me/api/v1/posts?sort=created&direction=desc&visibility=URL_ONLY`,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();

    return new Response(JSON.stringify(data));
  },
};
