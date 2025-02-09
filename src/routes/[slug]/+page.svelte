<script lang="ts">
import { useStoryblok } from "$lib/storyblok";
import { StoryblokComponent, useStoryblokBridge } from "@storyblok/svelte";
import { onMount } from "svelte";
import type { PageData } from "./$types";

const { data }: { data: PageData } = $props();

const story = $state(data.story);
let loaded = $state(false);
const datetime = new Date();

onMount(async () => {
  await useStoryblok();
  loaded = true;

  useStoryblokBridge(
    data.story.id,
    (newStory) => {
      story.content = newStory.content;
    },
    {
      // resolveRelations: ["popular-articles.articles"],
      preventClicks: true,
      resolveLinks: "url",
    },
  );
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
