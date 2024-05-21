<script lang="ts">
  import { onMount } from 'svelte';
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup'
  import Header from '$lib/components/Header.svelte'
  import Datetime from '$lib/components/Datetime.svelte';

  export let data

  let description = markdocToMarkup(data.event.description);
  const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });
  let imagePath = data.event?.image || ''

  console.log("EVENT OBJECT", data.event)
</script>

<Header link={true}/>
<section class="m-eventpage">
  {#if data.event?.series}
    <div class="series">
        <span class="field-label">Part of:</span> <a href="/series/{data.event.series}">{data.serie.seriesSlug}</a>
    </div>
  {/if}

  {#if data.event?.eventName}
    <h2>{data.event.eventName}</h2>
  {/if}

  {#if imagePath && imagePath !== '' && images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]}
      <img src={images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]?.default}/>
  {/if}
  <div class="dek">
    {@html description}
  </div>
  <div class="m-eventpage__times">
    {#if data.event.starttime}
      <p><span class="field-label">Starts at</span> <Datetime datetime={data.event.starttime}/></p>
    {/if}
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
</section>
<style>
  .m-eventpage {
    padding: 0 32px;
  }
  h2 {
    font-size: 32px;
    font-weight: 500;
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
</style>