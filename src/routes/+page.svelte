<script>
  export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Keystatic posts</h2>

{#each data.events as event}
  <h3><a href="/posts/{event.slug}">{event.eventName}</a></h3>
{/each}
