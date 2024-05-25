<script>
  import EventCard from '$lib/components/events/EventCard.svelte'
  import Header from '$lib/components/Header.svelte';
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup';
  export let data;
</script>

<Header link={true}/>
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


<style>
  .main {
    padding: 0 2rem;
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