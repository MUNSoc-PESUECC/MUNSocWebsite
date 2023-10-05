# MUNSocWebsite

# Hacknight 5.0

Hi participant! great to see you here.
This would be the section you **need** to read before you contribute anything to this repository.

We hope you know Git already. If you don't or don't remember, you can always checkout the [Git Reference Guide](https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide)

Now that we have gotten the general stuff out of the way, here's some things you'd have to know if you want to contribute to this repository

1. `DO NOT PUSH TO MAIN`: You wouldn't have permissions to push to the main branch of this repository anyway but this is a general rule of thumb. Always make a new branch or `fork` the repository, and then work on that branch or fork.
2. This is a `Sveltekit` project. `Sveltekit` is known to be the most fun tech stack to work on on the web. It's similar to frameworks like `Next.js`.
3. If you're new to Svelte has a really amazing interactive tutorial on their official website which you can find [here](https://learn.svelte.dev/tutorial/introducing-sveltekit)
4. If you want a more traditional documentation, that is [available too](https://kit.svelte.dev/docs/introduction)
5. Go to the `issues` tab above to explore available issues to solve. You can always propose your own too, you will get extra points for it!

## Introduction

This repository maintains code for the MUNSoc Website located [here](https://munsocecc.vercel.app).

## Installation

1. Make sure you have `nodejs` installed on your system.
2. Clone this repository by running this on a shell: `git clone git@github.com:MUNSoc-PESUECC/MUNSocWebsite.git`
3. cd into the cloned directory: `cd MUNSocWebsite`
4. Run `npm install` to install all the needed dependencies
5. Run `yarn run dev` to localhost the website
6. You can find the website at `http://localhost:5173`

## Folder Structure

For 90% of the development: you only need to focus on the `/src` folder, which looks like this:

```shell
src
├── app.d.ts
├── app.html
├── app.postcss
├── index.test.js
├── lib
│   └── utils
│       └── index.js
└── routes
    ├── +error.svelte
    ├── +layout.svelte
    ├── +page.js
    ├── +page.svelte
    ├── about
    │   ├── +page.js
    │   ├── +page.svelte
    │   └── awards
    │       ├── award1.md
    │       ├── award2.md
    │       └── <AWARD MARKDOWN FILES GO HERE>
    ├── api
    │   ├── awards
    │   │   └── +server.js
    │   ├── events
    │   │   └── +server.js
    │   ├── newsletters
    │   │   └── +server.js
    │   └── posts
    │       └── +server.js
    ├── events
    │   ├── +page.js
    │   ├── +page.svelte
    │   ├── [slug]
    │   │   ├── +page.js
    │   │   └── +page.svelte
    │   ├── testEvent1.md
    │   ├── testEvent2.md
    │   └── <EVENT MARKDOWN FILES GO HERE>
    ├── members
    │   └── +page.svelte
    ├── newsletter
    │   ├── +page.js
    │   ├── +page.svelte
    │   ├── [slug]
    │   │   ├── +page.js
    │   │   └── +page.svelte
    │   ├── february2023.md
    │   ├── january2023.md
    │   └── <NEWSLETTER MARKDOWN FILES GO HERE>
    └── posts
        ├── +page.js
        ├── +page.svelte
        ├── 1.md
        ├── 2.md
        ├── 3.md
        ├── <POSTS MARKDOWN FILES GO HERE>
        └── [slug]
            ├── +page.js
            └── +page.svelte
```

marked above where the markdown files for `events`, `posts`, `awards` and `newsletters` go.

## Development Notes

### The technologies used are

1. Svelte | [docs](https://svelte.dev/docs) | [tutorial](https://svelte.dev/tutorial/basics)
2. Sveltekit | [docs](https://kit.svelte.dev/docs/introduction)
3. Vite | [docs](https://vitejs.dev/guide/)
4. Tailwind CSS | [docs](https://tailwindcss.com/docs/installation)

The website is server-side-rendered using `sveltekit` and hosted on `vercel`

### Markdown rendering

We use a `[slug]`(dynamic route) model for posts, events and newsletters. All of these are fetched from markdown files and rendered using `mdsvex`.

The javascript file at `/src/lib/utils/index.js` is responsible for fetching all of these markdown files. This is then used by the files at `/src/routes/api/` to sort by date where applicable and serve them in a `.json` format.

Every route for these pages also has its `+server.js` that is responsible to fetch data from the `/api/` endpoint. And every `[slug]` has its `+server.js` to fetch all the metadata and contents and return it in the form of a javascript variable.

## Help

Feel free to approach any of the maintainers or open an `issue` if you find any :)
