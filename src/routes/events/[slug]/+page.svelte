<script>
  export let data
</script>

<a href="/">&larr; Back home</a>
<h1>{data.event.eventName}</h1>
{data.event.description[0].children[0].text}
<br/>
starts at: {data.event.starttime}
<br/>
doors at: {data.event.doorstime}
<br/>
url: <a href="#">{data.event.matchplayURL}</a><br/>
location: <a href="/locations/{data.event.location}">{data?.location?.locationName}</a>