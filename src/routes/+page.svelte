<script>
  import EventCard from '$lib/components/EventCard.svelte'
  import Header from '$lib/components/Header.svelte';
  export let data;
</script>

<Header/>

<section class="main">

  <p class="blurb">Pinball tournaments, leagues, and other events in South Slope, Brooklyn, NY</p>

  <h2>Upcoming</h2>

  {#each data.events as event}
    <EventCard
      eventName={event.entry.eventName}
      description={event.entry.description || ''}
      startTime={event.entry.starttime}
      doorsTime={event.entry.doorstime}
      slug={event.slug}
      imagePath={event.entry.image}
    />
  {/each}

</section>

<style>
  :global(body) {
    font-family: "Overpass", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    background: #f9f9f9;
  }

  :global(:root) {
    --color-blue: #4D65FF;
  }

  .main {
    padding: 0 2rem;
  }

  .blurb {
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
  }
</style>