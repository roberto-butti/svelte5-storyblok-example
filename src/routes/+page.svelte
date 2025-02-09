<script lang="ts">
  import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';
  import { onMount } from 'svelte';

  import type { PageData } from './$types';
  let hint = $state('');
  let { data }: { data: PageData } = $props();
  onMount(async () => {
    if (!PUBLIC_ACCESS_TOKEN) {
      hint = 'Create a `.env` file and set the PUBLIC_ACCESS_TOKEN key';
    }
  });
</script>

<main class="container">
  <section>
    <hgroup>
      <h2>Svelte5 and Storyblok integration example</h2>
      <p>How to integrate Storyblok in a SvelteKit (and Svelte 5) project</p>
    </hgroup>
    <p>
      Current Space ({data.space.id}): {data.space.name}
      <a href="https://app.storyblok.com/#/me/spaces/{data.space.id}/">Edit</a>
    </p>
    <p>You can visit the Home page.</p>
    <p>The Home page has the `/home` URL path</p>
    <p>{hint}</p>

    <a href="/home" role="button" tabindex="0">Go to Home page</a>
  </section>
</main>
