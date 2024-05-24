<script lang="ts">
  import '@fontsource-variable/overpass';
  import '@fontsource-variable/overpass/wght-italic.css';
  import EventCard from '$lib/components/eventcard/EventCard.svelte'
  import Header from '$lib/components/Header.svelte';
  import { compareAsc, compareDesc, differenceInCalendarDays } from "date-fns";
  import { type EventObject } from '$lib/types/EventObject';

  export let data;

  const sortDatesDescending = (events: EventObject[]) => {
    return events.filter(event => {
      return event.entry.starttime;
    }).sort((eventA, eventB) => {
      return compareDesc(eventA.entry.starttime, eventB.entry.starttime);
    })
  }
  const sortDatesAscending = (events: EventObject[]) => {
    return events.filter(event => {
      return event.entry.starttime;
    }).sort((eventA, eventB) => {
      return compareAsc(eventA.entry.starttime, eventB.entry.starttime);
    })
  }

  const allEvents: EventObject[] = data.events;

  let today = new Date();

  let currentEvents: any[] | EventObject[] = [];
  let futureEvents: any[] | EventObject[] = [];
  let pastEvents: any[] | EventObject[] = [];

  allEvents.forEach(eventObject => {
    let eventDate = new Date(eventObject.entry.starttime);
    let differenceInDays = differenceInCalendarDays(eventDate, today);
    if (differenceInDays > 0) {
      futureEvents.push(eventObject)
    } else if (differenceInDays < 0) {
      pastEvents.push(eventObject);
    } else {
      currentEvents.push(eventObject);
    }
  })

  if (currentEvents.length >= 1) {
    currentEvents = sortDatesAscending(currentEvents);
  }
  if (futureEvents.length >= 1) {
    futureEvents = sortDatesAscending(futureEvents);
  }
  if (pastEvents.length >= 1) {
    pastEvents = sortDatesDescending(pastEvents);
  }



</script>

<Header/>
<section class="main">
  <p class="blurb">Pinball tournaments, leagues, and other events in South Slope, Brooklyn, NY</p>
  
  {#if currentEvents && currentEvents.length > 1}
    <div class="header-container"><h2>Today</h2></div>
    {#each currentEvents as event}
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
  {/if}

  {#if futureEvents && futureEvents.length > 1}
  <div class="header-container"><h2>Future events</h2></div>
    {#each futureEvents as event}
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
  {/if}

  {#if pastEvents && pastEvents.length > 1}
    <div class="header-container"><h2>Past events</h2></div>
    {#each pastEvents as event}
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
  {/if}

  <h2>All events</h2>
  {#each allEvents as event}
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
    margin: .5rem;
  }

  .blurb {
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 3rem;
  }

  .header-container {
    background: var(--color-bg);
    width: 100%;
    height: 4rem;
    position: sticky;
    display: flex;
    align-items: center;
    top: 168px;
    margin: 4rem auto 1rem auto;
    z-index: 1;
    &:before, &:after {
      content: '';
      display: block;
      height: inherit;
      width: 4rem;
      position: absolute;
      top: 0;
      z-index: -1;
    }
    &:before {
      left: -2.5rem;
      background: #c468ff;
    }
    &:after {
      right: -2.5rem;
      background: var(--color-bg);
    }
  }

  .header-container h2 {
    font-size: 32px;
    font-weight: 200;
    font-style: italic;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    top: .25rem;
    padding: 0 .5rem;
    vertical-align: baseline;
    color: black;
    height: 3rem;
    @media (max-width: calc(800px + 2rem)) {
      left: 0;
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      background: #FFD1FF;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform: translateY(-.25rem) skew(-9deg);
    }
  }
</style>