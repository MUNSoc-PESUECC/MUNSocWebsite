# MUNSocWebsite

## Introduction

This repository maintains code for the MUNSoc Website located [here](https://munsocecc.vercel.app).

## Installation

1. Make sure you have `nodejs` and the `yarn` package manager installed on your system.
2. Clone this repository by running this on a shell: `git clone git@github.com:MUNSoc-PESUECC/MUNSocWebsite.git`
3. cd into the cloned directory: `cd MUNSocWebsite`
4. Run `yarn install` to install all the needed dependencies
5. Run `yarn dev` to localhost the website
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

We use a `[slug]` model for posts, events and newsletters. All of these are fetched from markdown files and rendered using `mdsvex`.

The javascript file at `/src/lib/utils/index.js` is responsible for fetching all of these markdown files. This is then used by the files at `/src/routes/api/` to sort by date where applicable and serve them in a `.json` format.

Every route for these pages also has its `+server.js` that is responsible to fetch data from the `/api/` endpoint. And every `[slug]` has its `+server.js` to fetch all the metadata and contents and return it in the form of a javascript variable.

## Help

Feel free to approach any of the maintainers or open an `issue` if you find any :)
