<script lang="ts">
    import { onMount } from 'svelte';
    import { markdocToMarkup } from '$lib/utils/markdocToMarkup'
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte';
    import Datetime from '$lib/components/Datetime.svelte';
    import IconButton from '$lib/components/buttons/IconButton.svelte';
    import Modal from '$lib/components/Modal/Modal.svelte';
    import QrCode from '$lib/components/QRCode/QRCode.svelte';
    import IconMapPin from '$lib/assets/icons/icon-map-pin.svelte';
    import Icon from '$lib/components/Icon.svelte';
    import { browser } from '$app/environment'

    export let data

    let description = markdocToMarkup(data.event.description);
    const images = import.meta.glob('$lib/assets/**/*.png', { eager: true });
    let imagePath = data.event?.image || ''

    $: startTimeDate = new Date(data.event.starttime);
    $: doorsTimeDate = new Date(data.event.doorstime);

    $: shareModalOpen = false;

    let currentUrl;

    onMount(() => {
        if (browser) {
            currentUrl = window.location.href
        }
    });
</script>

<Header link={true}/>
<section class="m-eventpage">
    <!--{JSON.stringify(data.event, null, 2)}-->
    {#if currentUrl}
    <Modal bind:isOpen={shareModalOpen}>
        <QrCode url={currentUrl}/>
    </Modal>
    {/if}

    <a class="link-back" href="/">← Back to list of all events</a>
    {#if data.event?.eventName}
        <h2>{data.event.eventName}</h2>
    {/if}
    {#if data.event?.series}
    <div class="series">
        Part of <a href="/series/{data.event.series}">{data.serie.seriesSlug}</a>
    </div>
    {/if}
    {#if data?.event?.location}
        <p class="location"><Icon icon="icon-map-pin" width="24px" height="24px"/><span>{data?.location?.locationName}</span></p>
    {/if}
    {#if data.event.starttime}
        {@const weekday = new Intl.DateTimeFormat('en-US', {
            weekday: 'short'
        }).format(startTimeDate)}
        {@const monthday = new Intl.DateTimeFormat('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        }).format(startTimeDate)}
        <p class="time time--start"><Icon icon="icon-clock"/><Datetime datetime={startTimeDate}/> on {weekday}, {monthday}</p>
        {/if}
    {#if data.event.doorstime}
        <p class="time time--doors">Doors at <Datetime datetime={doorsTimeDate}/></p>
    {/if}

    <IconButton label="Share this event" icon="icon-qr" on:click={()=>{
        shareModalOpen = true
    }}/>
    {#if data.event.matchplayURL}
        <IconButton label="Open in Matchplay" icon="icon-new-window" href={data.event.matchplayURL}/>
    {/if}
    {#if false && imagePath && imagePath !== '' && images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]}
        <img src={images[`/src/lib/assets/images/${data.event.slug}/${imagePath}`]?.default}/>
    {/if}
    <div class="dek" data-sveltekit-reload>
    {@html description}
    </div>
</section>
<style>
    .m-eventpage {
        padding: 0 32px;
        margin-bottom: 4rem;
        margin-top: -2rem;
        min-height: calc(100vh - 370px)
    }
    h2 {
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    img {
        display: block;
        width: 500px;
        max-width: 100%;
    }
    .series {
        font-size: 24px;
        text-transform: uppercase;
        margin-top: -.5rem;
        & a {
            color: #111;
            text-decoration: underline;
            font-weight: 600;
            text-decoration-color: var(--color-blue);
        }
    }
    .time, .location {
        font-size: var(--font-size-info);
        font-weight: 500;
    }
    .time {
        line-height: 1;
    }
    .location {
        font-weight: 500;
        font-size: 24px;
        margin-top: .5rem;
        margin-bottom: 0;
    }
    .time {
        margin-top: 0;
        font-size: 24px;
    }

    .time--doors {
        margin-top: -1rem;
        padding-left: 28px;
    }
    .dek {
        font-size: 18px;
        max-width: 800px;
    }
    /* :global because it's converted html from markdoc */
    :global(.dek) {
        & a {
            color: black;
            text-decoration: underline;
            text-decoration-color: var(--color-blue);
        }
        & a:hover {
            text-decoration-thickness: 2px;
        }
    }
    :global(.dek a),
    .link-back {
        color: black;
        text-decoration: underline;
        text-decoration-color: var(--color-blue);
    }
    .link-back {
        text-decoration: none;
        font-style: italic;
        transition: color 200ms ease-in-out;
        &:hover {
            color: var(--color-purp-dark);
        }
    }
    a, a:visited {
        color: #000;
    }
</style>