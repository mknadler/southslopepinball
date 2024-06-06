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
  import Sidebar from '$lib/components/Sidebar.svelte';

  import { getMenuIsOpenContext } from '$lib/stores/menuStore';

  const menuIsOpenStore = getMenuIsOpenContext();

    console.log("menu store", menuIsOpenStore, $menuIsOpenStore)

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
    if (eventObject.entry.unlisted) { 
        return; 
    }
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
<Sidebar bind:menuIsOpen />
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
</style>