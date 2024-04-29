<script>
    import { onMount } from 'svelte';

    export let datetime;

    let formatted;

    onMount(() => {
        formatted = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
        }).format(datetime);
    })
</script>

{#if formatted}
    {#if formatted == '12:00 AM'}
        Noon
    {:else if formatted == '12:00 PM'}
        Midnight
    {:else}
        {formatted}
    {/if}
{/if}
