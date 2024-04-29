<script>
  import { markdocToMarkup } from '$lib/utils/markdocToMarkup'

  export let data

  let description = markdocToMarkup(data.event.description);
</script>

<h1>Description</h1>

{@html description}

<br/>
<a href="/">&larr; Back home</a>
<h1>{data.event?.eventName}</h1>
{data.event?.description[0]?.children[0]?.text}
<br/>
starts at: {data.event?.starttime}
<br/>
doors at: {data.event?.doorstime}
<br/>
{#if data?.event?.matchplayURL}
  url: <a href="#">{data.event.matchplayURL}</a><br/>
{/if}
{#if data?.event?.location}
  Location: {data?.location?.locationName}
{:else}
  Location: (Not set yet)
{/if}

<style>
  :global(.bold) {
    font-weight: 800;
  }
  :global(.italic) {
    font-style: italic;
  }

</style>