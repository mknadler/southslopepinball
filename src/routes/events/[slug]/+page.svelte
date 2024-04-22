<script>
  export let data
</script>

<a href="/">&larr; Back home</a>
<h1>{data.eventName}</h1>
{data.description[0].children[0].text}

<br/>
starts at: {data.starttime}
<br/>
doors at: {data.doorstime}
<br/>
url: <a href="#">{data.matchplayURL}</a><br/>
location: <a href="/venues/{data.location}">{data.location}</a>