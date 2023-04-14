# Astro Reproduction Repo

Check out demo here
<!-- [Demo URL](demo.nukes.in) -->
[Demo URL](https://plutoniumm.github.io/astro-gh-assets/)

There are 3 images
- One where the Astro file `<style>` tag is used for blur
- One where a `global.css` file has the blur defined
- One where inline style blur effect is used

If all works well. The images should look identical.
## Fixes
```diff
export default defineConfig( {
  build: {
    format: 'directory',
+    assets: 'nonDashName'
  },
});
# OR
export default defineConfig( {
  build: {
    format: 'directory',
+    assets: 'random123hash456'
  },
});
```

Additionally if no jekyll is used add `.nojekyll` to make sure other curlies and underscores dont get randomly escaped, [Example](https://kit.svelte.dev/docs/adapter-static#github-pages)

**Suggestion**: An adapter ideally could do this out cleanly, taking the load off the user. However personally, maintaining an adapter for github pages alone seems excessive, could be maybe a few more things here and there


## Template
```
npm create astro@latest -- --template basics
```

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Side Comments
- Astro is Love
- Astro is Life
- Astro is the future
- Astro is the best
- Astro is the best
- Astro is the best
- idek wha GPT doin at this point
- Astro is the best
- Astro is the best
- Astro is the best