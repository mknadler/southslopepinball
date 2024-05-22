<script lang="ts">
  import '@fontsource-variable/overpass';
  import '@fontsource-variable/overpass/wght-italic.css';
  import EventCard from '$lib/components/eventcard/EventCard.svelte'
  import Header from '$lib/components/Header.svelte';

  export let data;

  console.log(data);
</script>

<Header/>
<section class="main">
  <p class="blurb">Pinball tournaments, leagues, and other events in South Slope, Brooklyn, NY</p>
  {#each data.events as event}
    {#if !event.entry.unlisted}
      <EventCard
        eventObject={event}
        locationObject={data.locations.find(location => {
          return location.slug === event.entry.location
        })}
        seriesObject={data.series.find(serie => {
          return serie.slug === event.entry.series
        })}
      />
    {/if}
  {/each}
</section>


<style>
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