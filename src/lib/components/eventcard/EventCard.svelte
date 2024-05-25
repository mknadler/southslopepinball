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
    <div class="title-lockup">
        <span class="date">
            {#if startTimeDate}
                {@const weekday = new Intl.DateTimeFormat('en-US', {
                    weekday: 'short'
                }).format(startTimeDate)}
                {@const monthday = new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric'
                }).format(startTimeDate)}
                {weekday}, {monthday} <span class="date__dot">&#8226;</span>
            {/if}
        </span>
        <h3><a href={`/events/${eventObject.slug}`}>{eventObject.entry.eventName}</a></h3>
    </div>
    {#if seriesObject?.entry?.seriesSlug}
        <div class="series">
            <span class="field-label">Part of</span> <a href="/series/{seriesObject.slug}">{seriesObject.entry.seriesSlug}</a>
        </div>
    {/if}
    {#if eventObject.entry.dek}
        <div class="dek">
            {@html markdocToMarkup(eventObject.entry.dek)}
        </div>
    {/if}
    <div class="info">
        <div class="info__time-and-place">
            {#if startTimeDate}
                <span class="info__time-and-place__time">
                    <Datetime datetime={startTimeDate}/>{#if startTimeDate && locationObject?.entry?.locationName},{/if}
                </span>
            {/if}
            {#if locationObject?.entry?.locationName}
                <span class="info__time-and-place__place">
                    {locationObject.entry.locationName}
                </span>
            {/if}
        </div>
        <div class="info__link">
            <a href={`/events/${eventObject.slug}`}>See details</a>&nbsp;→
        </div>
    </div>
</section>

<style>
    .m-eventcard {
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-bottom: 4rem;
        max-width: 800px;
        margin: 0 auto;
        border-bottom: 1px dashed var(--color-gray-medium);
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
        text-transform: uppercase;
        line-height: 1;
    }
    h3 {
        display: inline;
        font-size: var(--font-size-headings);
        font-weight: bold;
        margin: 0;
        margin-bottom: 1rem;
        transition: text-shadow 200ms ease-in-out;

    }
    h3:hover {
        text-shadow: 2px -1px 0 var(--color-purp);
    }
    h3 a {
        display: inline;
    }

    .date {
        display: inline-block;
        font-weight: 400;
        font-size: var(--font-size-headings);
        margin-bottom: 0.5rem;
        margin-right: 0.25rem;
        color: var(--color-purp-dark);
    }
    .date__dot {
        opacity: .5;
    }

    .starttime, .doorstime {
        display: block;
        margin: 0;
    }

    .field-label {
        font-weight: 600;
        text-transform: uppercase;
    }
    img {
        max-width: 100%;
        width: 300px;
        margin-bottom: 1rem;
        display: none;
    }
    a {
        color: #111111;
        text-decoration: none;
        display: inline-block;
        position: relative;
    }
    .matchplay a,
    .series a {
        text-decoration: underline;
        text-decoration-color: var(--color-blue);
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
        background: var(--color-purp);
    }
    .info {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 1rem;
        font-size: var(--font-size-info);
        font-weight: 500;
        text-transform: uppercase;
    }
    .info__link a {
        text-decoration: underline;
        text-decoration-color: var(--color-blue);
        font-weight: 600;
    }

    .dek {
        font-size: var(--font-size-body-large);
        margin-top: 1rem;
        & p {
            margin: 0;
        }
    }

    .series {
        display: none;
    }
</style>