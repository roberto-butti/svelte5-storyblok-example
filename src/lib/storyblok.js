// @ts-nocheck
import { apiPlugin, storyblokInit } from '@storyblok/svelte';
import { PUBLIC_ACCESS_TOKEN, PUBLIC_REGION } from '$env/static/public';

export async function useStoryblok(accessToken = '') {
  accessToken = accessToken === '' ? PUBLIC_ACCESS_TOKEN : accessToken;

  storyblokInit({
    accessToken: accessToken,
    use: [apiPlugin],
    components: {
      feature: (await import('$lib/../components/Feature.svelte')).default,
      grid: (await import('$lib/../components/Grid.svelte')).default,
      page: (await import('$lib/../components/Page.svelte')).default,
      teaser: (await import('$lib/../components/Teaser.svelte')).default
    },
    apiOptions: {
      https: true,
      cache: {
        type: 'memory'
      },
      region: PUBLIC_REGION // "us" if your space is in US region
    }
  });
}
