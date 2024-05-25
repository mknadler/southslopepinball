<script lang="ts">
  import { onMount } from 'svelte';
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte';
  import Datetime from '$lib/components/Datetime.svelte';

  export let data

  let description = markdocToMarkup(data.event.description);
  const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });
  let imagePath = data.event?.image || ''

  $: startTimeDate = new Date(data.event.starttime);
  $: doorsTimeDate = new Date(data.event.doorstime);

  console.log("EVENT OBJECT", data.event)
</script>

<Header link={true}/>
<section class="m-eventpage">
  {JSON.stringify(data.event, null, 2)}
  {#if data.event?.eventName}
    <h2>{data.event.eventName}</h2>
  {/if}
  {#if data.event?.series}
    <div class="series">
      Part of <a href="/series/{data.event.series}">{data.serie.seriesSlug}</a>
    </div>
  {/if}


  {#if data.event.starttime}
    <p class="time time--start">Starts at <Datetime datetime={startTimeDate}/></p>
  {/if}
  {#if data.event.doorstime}
  <p class="time time--doors">Doors at <Datetime datetime={doorsTimeDate}/></p>
{/if}

  {#if imagePath && imagePath !== '' && images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]}
      <img src={images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]?.default}/>
  {/if}
  <div class="dek">
    {@html description}
  </div>
  <div class="m-eventpage__times">
    {#if data.event.doorstime}
      <p>Doors at: <Datetime datetime={data.event.doorstime}/></p>
    {/if}
  </div>

  {#if data?.event?.matchplayURL}
    url: <a href="#">{data.event.matchplayURL}</a><br/>
  {/if}
  {#if data?.event?.location}
    Location: {data?.location?.locationName}
  {:else}
    Location: (Not set yet)
  {/if}

  {#if data.event.matchplayURL && data.event.matchplayURL != '#'}
    <div class="matchplay">
        <span class="field-label">Matchplay</span> 
        <a data-sveltekit-reload rel="external" href={eventObject.entry.matchplayURL}>{eventObject.entry.matchplayURL}</a>
    </div>      
  {/if}

</section>
<Footer/>

    <!--
    <div class="info">
        <div class="info__lockup">
            {#if locationObject?.entry?.locationName}
                <div class="location">
                    <span class="field-label">Venue</span>
                    <span class="m-eventcard__location">

                    </span>
                </div>
            {/if}
            {#if startTimeDate}
                <div class="start-time">
                    <span class="field-label">Starts at</span> <Datetime datetime={startTimeDate}/>
                </div>
            {/if}
            {#if doorsTimeDate}
                <div class="doors-time">
                    <span class="field-label">Doors at</span> <Datetime datetime={doorsTimeDate}/>
                </div>
            {/if}

    
        </div>
        <div class="info__cta">
            <a href={`/events/${eventObject.slug}`}>See details</a>&nbsp;→
        </div>
    </div>
  -->
<style>
  .m-eventpage {
    padding: 0 32px;
    margin-bottom: 4rem;
    min-height: calc(100vh - 370px)
  }
  h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
  }
    .field-label {
        font-weight: 600;
        text-transform: uppercase;
    }
  img {
    display: block;
    width: 500px;
    max-width: 100%;
  }
  .series {
    font-size: 24px;
    text-transform: uppercase;
    & a {
      color: #111;
      text-decoration: underline;
      font-weight: 600;
      text-decoration-color: var(--color-blue);
    }
  }
  .time {
    font-size: var(--font-size-info);
    font-weight: 500;
    margin: 1rem 0;
  }
  .time--doors {
    margin-top: -1rem;
  }
</style>