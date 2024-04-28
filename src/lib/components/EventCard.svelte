<script lang="ts">
    export let eventName: string = '';
    export let matchplayUrl: string = '#';
    export let description: string = '';
    export let startTime: string = '';
    export let doorsTime: string = '';
    export let slug = '';
    export let imagePath = '';
    export let location;

    let startTimeDate = new Date(startTime);
    let doorsTimeDate = new Date(doorsTime);

    const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });

</script>
<section class="m-eventcard visually-hidden">
    <img src={images[`/src/lib/assets/${slug}/${imagePath}`]?.default}/>
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
    {#if description}
        <p>
        {description[0].children[0].text}
        </p>
    {/if}
    {#if location}
        {location.entry.locationName}<br/>
    {/if}
    {#if startTime}
        Starts at 
        {@const datetime = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        }).format(startTimeDate)}
        {#if datetime == '12:00 AM'}
            Noon
        {:else if datetime == '12:00 PM'}
            Midnight
        {:else}
            {datetime}
        {/if}
    {/if}
    <br/>
    {#if doorsTime}
        Doors at 
        {@const datetime = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        }).format(doorsTimeDate)}
        {#if datetime == '12:00 AM'}
            Noon
        {:else if datetime == '12:00 PM'}
            Midnight
        {:else}
            {datetime}
        {/if}
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
        font-size: 21px;
        text-transform: uppercase;
        font-weight: 500;
    }
    .date {
        color: var(--color-blue);
        display: inline;
    }
    h3 {
        display: inline;
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