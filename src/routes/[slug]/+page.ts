import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/storyblok';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  let slug = params.slug ?? 'home';
  await useStoryblok();
  let storyblokApi = await useStoryblokApi();

  return storyblokApi
    .get(`cdn/stories/${slug}`, {
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
