# Svelte 5 and Storyblok example

Hi Folks 👋
This repository contains a simple example of a SvelteKit (with Svelte 5) project integrated with Storyblok and the Storyblok Visual Editor.


## Creating your SvelteKit project

**Clone the repository**:

```shell
git clone https://github.com/roberto-butti/svelte5-storyblok-example.git
```

Then **create the `.env` file** with these two parameters:

```ini
PUBLIC_ACCESS_TOKEN=youraccesstoken
PUBLIC_REGION=eu
```
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
