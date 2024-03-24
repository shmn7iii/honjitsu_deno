import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const token = Deno.env.get("SIZUME_API_TOKEN");
    const slug = ctx.params.slug;
    const apiUrl = Deno.env.get("SIZUME_API_URL") + "/posts/" + slug;

    const response = await fetch(
      apiUrl,
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
