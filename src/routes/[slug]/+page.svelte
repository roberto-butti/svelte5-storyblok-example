<script lang="ts">
  import { onMount } from 'svelte';
  import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
  import type { PageData } from './$types';
  import { useStoryblok } from '$lib/storyblok';

  const { data }: { data: PageData } = $props();

  const story = $state(data.story);
  let loaded = $state(false);
  const datetime = new Date();

  onMount(async () => {
    await useStoryblok();
    loaded = true;

    useStoryblokBridge(data.story.id, (newStory) => (story.content = newStory.content), {
      // resolveRelations: ["popular-articles.articles"],
      preventClicks: true,
      resolveLinks: 'url'
    });

  });
</script>

<div>

    {#if data.error}
      ERROR {data.error.message}
    {/if}

    {#if ! loaded }
    <div>Loading...</div>
    {:else if story && story.content}
      <StoryblokComponent blok={story.content} />
    {:else}
    <div>Getting Story</div>
    {/if}


</div>
