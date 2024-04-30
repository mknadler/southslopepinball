<script lang="ts">
    import Datetime from './Datetime.svelte'
    import { markdocToMarkup } from '$lib/utils/markdocToMarkup';

    export let eventName: string = '';
    export let matchplayUrl: string = '#';
    export let startTime: string = '';
    export let doorsTime: string = '';
    export let slug = '';
    export let imagePath = '';
    export let location;
    export let dek;
    export let series;

    let startTimeDate = new Date(startTime);
    let doorsTimeDate = new Date(doorsTime);

    const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });

</script>
<section class="m-eventcard">
    {#if false && imagePath && imagePath !== ''}
        <img src={images[`/src/lib/assets/${slug}/${imagePath}`]?.default}/>
    {/if}
    <h3><a href={`/events/${slug}`}>{eventName}</a></h3>
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
    {#if series?.entry?.seriesSlug}
        <div class="series">
            <span class="field-label">Part of:</span> {series.entry.seriesSlug}
        </div>
    {/if}
    {#if dek}
        <div class="dek">
            {@html markdocToMarkup(dek)}
        </div>
    {/if}

    {#if matchplayUrl && matchplayUrl != '#'}
        <a href={matchplayUrl}>Matchplay</a>
    {/if}

    {#if location?.entry?.locationName}
        <div class="location">
            <span class="field-label">Venue</span>
            <span class="m-eventcard__location">
                {location.entry.locationName}
            </span>
        </div>
    {/if}
    {#if startTime}
        <div class="start-time">
            <span class="field-label">Starts at</span> <Datetime datetime={startTimeDate}/>
        </div>
    {/if}
    {#if doorsTime}
        <div class="doors-time">
            <span class="field-label">Doors at</span> <Datetime datetime={doorsTimeDate}/>
        </div>
    {/if}
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
    }
    .starttime, .doorstime {
        display: block;
        margin: 0;
    }
    .series {
        margin-top: .5rem;
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

</style>