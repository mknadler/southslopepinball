<script>
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup'
  import Header from '$lib/components/Header.svelte'
  import Datetime from '$lib/components/Datetime.svelte';

  export let data

  let description = markdocToMarkup(data.event.description);

  let startTimeDate, doorsTimeDate;

  if (data?.event?.startTime) {
    startTimeDate = new Date(data.event.startTime);
  }
  if (data?.event?.doorsTime) {
    doorsTimeDate = new Date(data.event.doorsTime);
  }
</script>

<Header link={true}/>
<section class="m-eventpage">
  {#if data.event?.eventName}
    <h2>{data.event.eventName}</h2>
  {/if}

  <div class="dek">
    {@html description}
  </div>

  {#if startTimeDate}
    Starts at: <Datetime datetime={startTimeDate}/>
  {/if}

  {#if doorsTimeDate}
    Doors at: <Datetime datetime={doorsTimeDate}/>
  {/if}

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
  :global(.bold) {
    font-weight: 800;
  }
  :global(.italic) {
    font-style: italic;
  }
  .m-eventpage {
    padding: 0 32px;
  }
  h2 {
    font-size: 32px;
    font-weight: 500;
  }

</style>