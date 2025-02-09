<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';

  const { blok } = $props();
  const datetime = new Date();
</script>

<article use:storyblokEditable={blok}>
  {#if blok.image && blok.image.filename}
    <figure class="">
      <img src="{blok.image.filename}/m/800x600" alt={blok.image.alt} />
    </figure>
  {/if}
  {blok.name}
  <p>{ datetime }</p>
</article>
