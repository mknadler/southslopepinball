<script>
  import EventCard from '$lib/components/events/EventCard.svelte'
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup';
  export let data;

  let menuIsOpen;
</script>

<Header bind:menuIsOpen link={true}/>
<Sidebar bind:menuIsOpen />
<section class="main">
  <h2>{data.series.seriesSlug}</h2>
  <div class="series__description">
    {#if data.series.description}
      {@html markdocToMarkup(data.series.description)}
    {/if}
  </div>

  {#each data.eventsInSeries as event}
      <EventCard
        eventObject={event}
        locationObject={data.locations.find(location => {
          return location.slug === event.entry.location
        })}
      />
  {/each}
</section>
<Footer/>

<style>
  .main {
    padding: 0 2rem;
    min-height: calc(100vh - 320px)
  }

  h2, .series__description {
    max-width: 800px;
    margin: 0 auto;
  }

  .series__description {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
  }
      .field-label {
        font-weight: 600;
        text-transform: uppercase;
    }
</style>