import { PUBLIC_VERSION } from "$env/static/public";
import { useStoryblok } from "$lib/storyblok";
import { useStoryblokApi } from "@storyblok/svelte";
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const slug = params.slug ?? "home";
  await useStoryblok();
  const storyblokApi = await useStoryblokApi();

  return storyblokApi
    .get(`cdn/stories/${slug}`, {
      version: PUBLIC_VERSION ?? "published",
    })
    .then((dataStory) => {
      return {
        story: dataStory.data.story,
        error: false,
      };
    })
    .catch((error) => {
      return {
        story: {},
        error: error,
      };
    });
}
