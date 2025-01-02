// @ts-nocheck
import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/storyblok';

/** @type {import('./$types').PageLoad} */
export async function load() {
  await useStoryblok();

  let storyblokApi = await useStoryblokApi();

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
