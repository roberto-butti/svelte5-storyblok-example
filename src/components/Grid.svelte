<script lang="ts">
import { StoryblokComponent, storyblokEditable } from "@storyblok/svelte";

const { blok } = $props();
</script>

<div use:storyblokEditable={blok} class="grid">
  {#each blok.columns as item (item._uid)}
    <div>
      <!-- Component UID: {item._uid} -->
      <StoryblokComponent blok={item} />
    </div>
  {/each}
</div>
