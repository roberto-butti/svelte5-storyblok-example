<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';

  const { blok } = $props();
</script>

<article use:storyblokEditable={blok}>
  {blok.headline}
</article>
