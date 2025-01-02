<script>
  import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';
  import { onMount } from 'svelte';

  let hint = $state('');
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
    <p>You can visit the Home page.</p>
    <p>The Home page has the `/home` URL path</p>
    <p>{hint}</p>

    <a href="/home" role="button" tabindex="0">Go to Home page</a>
  </section>
</main>
