# Svelte 5 and Storyblok example

Hi Folks 👋
This repository contains a simple example of a SvelteKit (with Svelte 5) project integrated with Storyblok and the Storyblok Visual Editor.

In this README, you'll find the necessary information to clone the project and configure it with your Storyblok Space.

If you're interested in learning more about the process of setting up a base project with SvelteKit and Storyblok, check out this article: <https://dev.to/robertobutti/integrating-sveltekit-with-storyblok-using-svelte-5-384p>

## Creating your SvelteKit project

**Clone the repository**:

```shell
git clone https://github.com/roberto-butti/svelte5-storyblok-example.git
```

Then **create the `.env` file** with these three parameters:

```ini
PUBLIC_ACCESS_TOKEN=youraccesstoken
PUBLIC_REGION=eu
PUBLIC_VERSION=draft
```

The `.env` file stores environment variables needed for Storyblok integration. Here’s what each parameter does:

- `PUBLIC_ACCESS_TOKEN` – Your Storyblok API access token, required to fetch content. Replace `youraccesstoken` with your actual token.
- `PUBLIC_REGION` – Specifies the Storyblok region (`eu` for Europe, `us` for the United States).
- `PUBLIC_VERSION` – Defines the content version to fetch. Use `draft` for real-time previews or `published` for live content.

You can **create your Storyblok space** and pick the **Preview Access Token**.

Then you can **install all the SvelteKit dependencies** via `bun install` (or `npm install` or `pnpm install` or `yarn`)

Then you can **run the local server**:

```shell
bun dev
```

Then **open your browser** at <https://localhost:5173/>

## Creating a Storyblok space

To create a Storyblok space, and get the proper access token you can read this tutorial: <https://dev.to/robertobutti/how-to-set-up-a-storyblok-space-with-the-community-plan-for-local-development-1i37>

## Building

To create a production version of your SvelteKit project:

```bash
bun build
```

You can preview the production build with `bun preview`.

> You may need to install an adapter for your target environment to deploy your app.
