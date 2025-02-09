import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/storyblok';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
  await useStoryblok();
  const storyblokApi = await useStoryblokApi();

  return storyblokApi
    .get(`cdn/spaces/me`)
    .then((dataSpace) => {
      return {
        space: dataSpace.data.space,
        error: false
      };
    })
    .catch((error) => {
      return {
        space: {},
        error: error
      };
    });
}
