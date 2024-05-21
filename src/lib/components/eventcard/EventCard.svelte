<script lang="ts">
    import Datetime from '$lib/components/Datetime.svelte'
    import { markdocToMarkup } from '$lib/utils/markdocToMarkup';
    import type { EventObject } from '$lib/types/EventObject';
    import type { SeriesObject } from '$lib/types/SeriesObject';
	import type { LocationObject } from '$lib/types/LocationObject';

    export let locationObject: LocationObject = null;
    export let seriesObject: SeriesObject = null;
    export let eventObject: EventObject = null;

    $: startTimeDate = new Date(eventObject.entry.starttime);
    $: doorsTimeDate = new Date(eventObject.entry.doorstime);

    const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });

</script>
<section class="m-eventcard">
    {#if eventObject.entry.image && eventObject.entry.image !== '' && 
         images[`/src/lib/assets/images/${eventObject.slug}/${eventObject.entry.image}`]
    }
        <img src={images[`/src/lib/assets/images/${eventObject.slug}/${eventObject.entry.image}`]?.default}/>
    {/if}
    <h3><a href={`/events/${eventObject.slug}`}>{eventObject.entry.eventName}</a></h3>
    <span class="date">
        {#if startTimeDate}
            {@const weekday = new Intl.DateTimeFormat('en-US', {
                weekday: 'long'
            }).format(startTimeDate)}
            {@const monthday = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric'
            }).format(startTimeDate)}
            {weekday} {monthday}
        {/if}
    </span>
    {#if seriesObject?.entry?.seriesSlug}
        <div class="series">
            <span class="field-label">Part of:</span> <a href="/series/{seriesObject.slug}">{seriesObject.entry.seriesSlug}</a>
        </div>
    {/if}
    {#if eventObject.entry.dek}
        <div class="dek">
            {@html markdocToMarkup(eventObject.entry.dek)}
        </div>
    {/if}

    {#if eventObject.entry.matchplayURL && eventObject.entry.matchplayURL != '#'}
        <a href={eventObject.entry.matchplayURL}>Matchplay</a>
    {/if}

    <div class="info">
        <div class="info__lockup">
            {#if locationObject?.entry?.locationName}
                <div class="location">
                    <span class="field-label">Venue</span>
                    <span class="m-eventcard__location">
                        {locationObject.entry.locationName}
                    </span>
                </div>
            {/if}
            {#if startTimeDate}
                <div class="start-time">
                    <span class="field-label">Starts at</span> <Datetime datetime={startTimeDate}/>
                </div>
            {/if}
            {#if doorsTimeDate}
                <div class="doors-time">
                    <span class="field-label">Doors at</span> <Datetime datetime={doorsTimeDate}/>
                </div>
            {/if}
        </div>
        <div class="info__cta">
            <a href={`/events/${eventObject.slug}`}>See details</a>&nbsp;→
        </div>
    </div>
</section>

<style>
    .m-eventcard {
        background: rgba(102, 102, 255, 0.1);
        padding: 1rem;
        margin-bottom: 2rem;
    }
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px; 
    }
    h3, .date {
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 800;
        line-height: 1;
    }
    .date {
        display: block;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 0.5rem;
    }
    .starttime, .doorstime {
        display: block;
        margin: 0;
    }
    h3 {
        font-weight: 700;
        display: block;
        margin: 0;
        margin-bottom: 1rem;
        text-shadow: 0px 1px 0 #111;
        transition: text-shadow 200ms ease-in-out;
    }
    h3:hover {
        text-shadow: 2px -1px 0 var(--color-blue);
    }
    .field-label {
        font-weight: 600;
        text-transform: uppercase;
    }
    img {
        max-width: 100%;
        width: 300px;
        margin-bottom: 1rem;
    }
    a {
        color: #111111;
        text-decoration: none;
        display: inline-block;
        position: relative;
    }
    a:after {
        content: '';
        display: none;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -2px;
        background: var(--color-blue);
        transform: translateY(0px);
        transition: transform 100ms ease-in-out, background 100ms ease-in;
    }
    a:hover:after {
        transform: translateY(-4px);
        background: #c468ff;
    }
    .info {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .info__cta {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
    }
    .info__cta a {
        font-size: 18px;
        text-decoration: underline;
        text-decoration-color: var(--color-blue);
    }

</style>