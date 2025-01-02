<script lang="ts">
  import { onMount } from 'svelte';
  import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
  import type { PageData } from './$types';
  import { useStoryblok } from '$lib/storyblok';

  let { data }: { data: PageData } = $props();

  let story = $state(data.story);
  let loaded = $state(false);

  onMount(async () => {
    await useStoryblok();
    loaded = true;
    //if (story) {
    useStoryblokBridge(data.story.id, (newStory) => (story = newStory), {
      // resolveRelations: ["popular-articles.articles"],
      preventClicks: true,
      resolveLinks: 'url'
    });
    //}
  });
</script>

<div>
  {#key story}
    {#if data.error}
      ERROR {data.error.message}
    {/if}

    {#if loaded && story && story.content}
      <StoryblokComponent blok={story.content} />
    {/if}
  {/key}
</div>
