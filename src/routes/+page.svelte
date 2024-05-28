<script lang="ts">
  import '@fontsource-variable/overpass';
  import '@fontsource-variable/overpass/wght-italic.css';
  import EventSection from '$lib/components/EventSection/EventSection.svelte';
  import EventSectionHeader from '$lib/components/EventSectionHeader/EventSectionHeader.svelte'
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { compareAsc, compareDesc, differenceInCalendarDays } from "date-fns";
  import { type EventObject } from '$lib/types/EventObject';
  import Menu from '$lib/components/Menu.svelte';

  export let data;
  let menuIsOpen = false;

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

<Header bind:menuIsOpen />
{#if menuIsOpen}
    <div class="sidebar">
        <Menu bind:menuIsOpen />
        <nav>
            <ul>
                <li>
                    <a href="#">Summer league</a>
                </li>
                <li>
                    <a href="#">Events at Kaite's</a>
                </li>
                <li>
                    <a href="#">Menu Item</a>
                </li>
                <li>
                    <a href="#">Menu item</a>
                </li>
            </ul>
        </nav>
    </div>
{/if}
<section class="main">
  <p class="blurb">Pinball tournaments, leagues, and other events in South Slope, Brooklyn, NY</p>
  
  {#if currentEvents && currentEvents.length > 0}
    <EventSectionHeader>Today</EventSectionHeader>
    <EventSection sectionEvents={currentEvents} allLocations={data.locations} allSeries={data.series}/>
  {/if}

  {#if futureEvents && futureEvents.length > 0}
    <EventSectionHeader>Future Events</EventSectionHeader>
    <EventSection sectionEvents={futureEvents} allLocations={data.locations} allSeries={data.series}/>
  {/if}

  {#if pastEvents && pastEvents.length > 0}
    <EventSectionHeader>Past Events</EventSectionHeader>
    <EventSection sectionEvents={pastEvents} allLocations={data.locations} allSeries={data.series}/>
  {/if}
</section>
<Footer />

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
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: #F4F6FF;
    z-index: 11;
    border-left: 2px solid #111;
  }
  nav {
    padding-top: 10rem;
    padding-right: 2.5rem;
    text-align: right;
  }
  nav li {
    list-style-type: none;
    margin: 1rem 0;
  }
  nav li a {
    font-size: 24px;
    color: #222;
    &:hover {
        color: #666;
    }
  }
</style>