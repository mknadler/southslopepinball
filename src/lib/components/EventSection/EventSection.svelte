<script lang="ts">
    import EventCard from "$lib/components/EventCard/EventCard.svelte";
	import type { EventObject } from "$lib/types/EventObject";
    import type { LocationObject } from "$lib/types/LocationObject";
    import type { SeriesObject } from "$lib/types/SeriesObject";

    export let allLocations: LocationObject[];
    export let allSeries: SeriesObject[];
    export let sectionEvents: EventObject[];
</script>

{#each sectionEvents as event}
    {#if !event.entry.unlisted}
    <EventCard
        eventObject={event}
        locationObject={allLocations.find(location => {
            return location.slug === event.entry.location
        })}
        seriesObject={allSeries.find(serie => {
            return serie.slug === event.entry.series
        })}
    />
    {/if}
{/each}