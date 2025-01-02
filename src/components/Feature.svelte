<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';

  let { blok } = $props();
</script>

<article use:storyblokEditable={blok}>
  {#if blok.image && blok.image.filename}
    <figure class="">
      <img src="{blok.image.filename}/m/800x600" alt={blok.image.alt} />
    </figure>
  {/if}
  {blok.name}
</article>
