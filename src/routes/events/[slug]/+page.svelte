<script>
  export let data
</script>

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