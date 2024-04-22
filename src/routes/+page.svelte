<script>
  export let data
</script>

<h1>South Slope Pinball</h1>
<p>Work in progress</p>
<h2>Events</h2>

{#each data.events as event}
  {JSON.stringify(event, 2, null)}
  <div style="background: #EEEEEE; padding: 1rem;">

  <h3><a href="/events/{event.slug}">{event.entry.eventName}</a></h3>
  </div>
{/each}
