# South Slope Pinball
An events hub for my local pinball scene, made using [Keystatic](www.keystatic.com) as the CMS (running in a tiny Next.JS app & courtesy of https://github.com/simonswiss/keystatic-sveltekit for this side of things) 

## How does this all work?
- CMS fields are configured in `keystatic/keystatic.config.ts`.
- User-entered entries in the CMS from Keystatic Cloud are saved as commits directly to this repo (`src/content`, mostly, though some images and singletons may end up elsewhere).
- That trigggers Vercel builds of the site's app and the CMS app.
- Keystatic Reader API is used to load the appropriate data from the CMS in the Svelte server routes (`src/routes/**/+page.server.ts`) when those routes are loaded.
- Svelte/SvelteKit handles front-end routing and rendering of that data.

## Development
After cloning repo, in both the base directory and /keystatic separately:
- Install packages: `pnpm install`
To run the app locally, in the base directory: `pnpm run dev`.
To run Storybook, in the base directory: `pnpm run storybook`.
To run the CMS app locally, in /keystatic: `pnpm run dev`

## N.B.
- Because changes to the CMS content are saved as commits, be aware of the need to fetch/pull from main early and often when developing.

## Deployment
- Make and work in a feature branch
- PR that branch into main
- Make sure Vercel builds pass before merging into main
- When the branch is merged, Vercel builds will be triggered and the changes should be live in ~60-90s