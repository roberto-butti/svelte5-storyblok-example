// @ts-nocheck
import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/storyblok';
export const prerender = true;
/** @type {import('./$types').PageLoad} */
export async function load() {
  await useStoryblok();

  const storyblokApi = await useStoryblokApi();

  return storyblokApi
    .get('cdn/stories/home', {
      version: 'draft'
    })
    .then((dataStory) => {
      return {
        story: dataStory.data.story,
        error: false
      };
    })
    .catch((error) => {
      return {
        story: {},
        error: error
      };
    });
}
