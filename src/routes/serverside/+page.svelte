<script lang="ts">
import { useStoryblok } from "$lib/storyblok";
import { StoryblokComponent, useStoryblokBridge } from "@storyblok/svelte";
import { onMount } from "svelte";
import type { PageData } from "./$types";

const { data }: { data: PageData } = $props();

let story = $state(data.story);
let loaded = $state(false);

onMount(async () => {
  await useStoryblok();
  loaded = true;
  if (story) {
    useStoryblokBridge(
      data.story.id,
      (newStory) => {
        story = newStory;
      },
      {
        // resolveRelations: ["popular-articles.articles"],
        preventClicks: true,
      },
    );
  }
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
