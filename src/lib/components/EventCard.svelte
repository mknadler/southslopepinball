<script lang="ts">
    import Datetime from './Datetime.svelte'

    export let eventName: string = '';
    export let matchplayUrl: string = '#';
    export let startTime: string = '';
    export let doorsTime: string = '';
    export let slug = '';
    export let imagePath = '';
    export let location;

    let startTimeDate = new Date(startTime);
    let doorsTimeDate = new Date(doorsTime);

    const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });

</script>
<section class="m-eventcard">
    {#if imagePath && imagePath !== ''}
        <img src={images[`/src/lib/assets/${slug}/${imagePath}`]?.default}/>
    {/if}
    <span class="date">
        {#if startTimeDate}
            {@const weekday = new Intl.DateTimeFormat('en-US', {
                weekday: 'short'
            }).format(startTimeDate)}
            {@const monthday = new Intl.DateTimeFormat('en-US', {
                month: 'numeric',
                day: 'numeric'
            }).format(startTimeDate)}
            {weekday} {monthday}
        {/if}
    </span>
    <h3><a href={`/events/${slug}`}>{eventName}</a></h3>
    {#if matchplayUrl && matchplayUrl != '#'}
        <a href={matchplayUrl}>Matchplay</a>
    {/if}

    {#if location?.entry?.locationName}
        <div class="location">
            <span class="field-label">VENUE</span>
            <span class="m-eventcard__location">
                {location.entry.locationName}
            </span>
        </div>
    {/if}
    {#if startTime}
        <div class="start-time">
            Starts at <Datetime datetime={startTimeDate}/>
        </div>
    {/if}
    {#if doorsTime}
        <div class="doors-time">
            Doors at <Datetime datetime={doorsTimeDate}/>
        </div>
    {/if}
</section>

<style>
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
        color: var(--color-blue);
        display: block;
    }
    .starttime, .doorstime {
        display: block;
        margin: 0;
    }
    h3 {
        display: block;
        margin: 0;
        margin-bottom: 1rem;
    }
    .field-label {
        font-weight: 600;
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
        display: block;
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